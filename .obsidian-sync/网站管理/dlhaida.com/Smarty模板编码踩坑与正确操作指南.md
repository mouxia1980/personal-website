# Smarty 模板编码踩坑与正确操作指南

**日期**：2026-07-18
**操作员**：qing（AI Agent）
**严重程度**：🔴 高危（会导致前台中文全部乱码）

---

## 踩坑经过

### 2026-07-18 第一次编码灾难

**操作**：通过后台 API 读取 `head.html` 模板内容 → 修改 JSON-LD → 保存回后台

**结果**：前台所有中文变成乱码（`å¤§è¿æµ·å¤§` 这种），包括 Organization name、FAQ 问答、areaServed 城市名全部损坏。

**回滚**：使用备份文件 `/tmp/head.html.backup.*` 恢复。

### 2026-07-18 第二次尝试（仍有残留乱码）

**操作**：从后台读取内容后用 Python json.loads 解析再修改

**结果**：Q1-Q3 和 areaServed 仍然是乱码，只有新加的 Q4-Q7 正常。

**原因**：后台读取回来的内容已经是乱码了，json.loads 只是把乱码当正常字符串处理，没有修复编码。

### 2026-07-18 第三次（最终成功）

**操作**：完全放弃从后台读取旧内容，用 Python 从零构建整个 JSON-LD。

**结果**：✅ 所有中文正常显示。

---

## 根本原因

### 后台编辑器的编码陷阱

| 环节 | 编码 | 结果 |
|------|------|------|
| 数据库中存储 | UTF-8 | 正常 |
| 后台编辑器读取显示 | UTF-8 → Latin-1 转换 | 中文变乱码 |
| 后台编辑器保存 | 把乱码当 UTF-8 存回 | 双重编码，彻底损坏 |

**核心问题**：777模板 CMS 的后台编辑器有编码 bug，读取时把 UTF-8 中文转成了 Latin-1 乱码。如果你从后台读取内容再改回去，乱码就会被永久写入。

### 为什么第一次加 JSON-LD 时也没好？

第一次成功上线 JSON-LD 时，也是用 Python 构建的，但因为当时是从后台读取旧模板后再替换 `{literal}` 块，旧模板中的 Smarty 变量（`{$seo['seo_title']}` 等）没问题，只有 JSON-LD 部分是新生成的所以正常。后来修改时把整个 JSON-LD 重新序列化，旧数据中的乱码就被带进来了。

---

## ✅ 正确操作方法（铁律）

### 原则：永远不要从后台读取模板内容来修改

**错误做法 ❌：**
```python
# 1. 从后台读取
resp = session.get('...template&f=edit&file=head.html')
content = extract_textarea(resp.text)  # ← 这里已经是乱码了！

# 2. 解析并修改
json_ld = json.loads(extract_json(content))
json_ld['areaServed'] = [...]  # ← 修改的是乱码数据

# 3. 保存回去
session.post('...edit_save', content=new_content)  # ← 乱码被永久写入
```

**正确做法 ✅：**
```python
# 1. 用 Python 从零构建整个 JSON-LD
new_json_ld = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "大连海大印刷有限公司",  # ← 直接写中文，Python 保证 UTF-8
            # ...
        }
    ]
}

# 2. 序列化为 JSON（关键参数！）
json_str = json.dumps(new_json_ld, ensure_ascii=False, indent=2)

# 3. 包装成 Smarty 兼容格式
literal_block = f'{{literal}}\n<script type="application/ld+json">\n{json_str}\n</script>\n{{/literal}}'

# 4. 只替换 {literal}...{/literal} 块，不动模板其他部分
#    （先读取模板，但只用正则定位 literal 块的起止位置，不读取其内容）
resp = session.get('...template&f=edit&file=head.html')
content = extract_textarea(resp.text)
new_content = re.sub(r'\{literal\}.*?\{/literal\}', literal_block, content, flags=re.DOTALL)

# 5. 保存
session.post('...edit_save', content=new_content)
```

### 关键要点

1. **`ensure_ascii=False`** — json.dumps 必须加这个参数，否则中文会被转成 `\uXXXX`  escape 序列
2. **从零构建数据** — 不要从后台读取旧 JSON-LD 再修改，直接重建整个数据结构
3. **只替换 literal 块** — 用正则定位 `{literal}...{/literal}` 的起止位置，替换整个块，不碰外面的 Smarty 模板代码
4. **保存前本地验证** — 用 json.loads 解析一遍，确认中文正常

---

## 操作清单（每次修改 JSON-LD 前对照）

- [ ] 备份当前模板（读取后保存到 `/tmp/head.html.backup.TIMESTAMP`）
- [ ] 用 Python dict 从零构建新的 JSON-LD 数据
- [ ] `json.dumps(data, ensure_ascii=False, indent=2)` 序列化
- [ ] 包装在 `{literal}...{/literal}` 中
- [ ] 用正则替换模板中的旧 literal 块
- [ ] 本地验证：`json.loads` 解析 + 抽查中文字段
- [ ] 保存到服务器
- [ ] 前台验证：`curl` 抓取页面 + 提取 JSON-LD + 检查中文

---

## 回滚方法

如果改坏了，用备份文件恢复：

```python
import pickle
with open('/tmp/login_session.pkl', 'rb') as f:
    session = pickle.load(f)

with open('/tmp/head.html.backup.YYYYMMDD_HHMMSS', 'r', encoding='utf-8') as f:
    backup_content = f.read()

session.post(
    'http://www.dlhaida.com/index.php?m=sysadmin&c=template&f=edit_save',
    data={'file': 'head.html', 'content': backup_content}
)
```

---

## 附录：本次最终成功的 JSON-LD 结构

详见 `AI SEO改造尝试-踩坑日志.md`，此处不重复。

---

> **一句话记住**：改 JSON-LD 时，数据从零建，`ensure_ascii=False`，只替 literal 块，不改整文件。
> **永远不要相信后台编辑器返回的中文内容。**
