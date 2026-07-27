# AI SEO 改造尝试 — 操作记录与踩坑日志

**日期**：2026-07-18
**操作员**：qing（AI Agent）
**第一轮**：❌ 失败，已回滚
**第二轮**：✅ 成功，已上线

---

## 背景

目标：为 dlhaida.com 添加 Schema.org JSON-LD 结构化数据，使 AI 搜索引擎（元宝、DeepSeek、豆包等）能够识别公司信息。

计划添加的结构化数据类型：
- Organization（组织信息）
- LocalBusiness（本地商家）
- Product × 5（定制包装盒、礼品盒、披萨盒、纸箱、手提袋）
- FAQPage（常见问题解答）

---

## 第一轮：失败（已回滚）

### Step 1: 登录后台 ✅

- 入口：http://www.dlhaida.com/admin/
- 有验证码，与 PHPSESSID 绑定
- 第一次验证码 36fe → 过期失败
- 第二次验证码 3527 → 登录成功

### Step 2: 第一次修改 header.html ❌

**错误**：把 JSON-LD 加到了 header.html（body 部分），而不是 head.html（head 区域）

### Step 3: 第二次修改 head.html ❌💥

**致命错误**：直接把 JSON-LD 追加到 head.html 末尾

- Smarty 模板引擎把 JSON-LD 中的 `{}` 当作模板标签解析
- 报错：`SmartyCompilerException - Syntax Error in template`
- 整个网站显示 Fatal Error 白屏

### Step 4: 紧急回滚 ✅

- head.html 恢复到原始 757 字符
- header.html 中的 JSON-LD 也清除
- 前台恢复正常

---

## 第二轮：成功 ✅

### 关键突破：使用 `{literal}{/literal}` 包裹 JSON-LD

**原理**：Smarty 的 `{literal}` 标签会让内部所有内容被视为纯文本，不进行模板解析。

**操作方法**：

1. 重新登录后台（验证码 4a4c）
2. 进入模板管理 → 编辑 head.html
3. 在原有内容末尾追加：

```smarty
{literal}
<script type="application/ld+json">
{...JSON-LD 内容...}
</script>
{/literal}
```

4. 保存 → 前台立即生效（因为是 PHP 动态渲染，不需要重新生成静态页）

### 验证结果

| 检查项 | 结果 |
|--------|------|
| 中文首页 | ✅ 正常，20421 字符 |
| 英文首页 | ✅ 正常，18115 字符 |
| 日文首页 | ✅ 正常，18157 字符 |
| JSON 格式 | ✅ 合法，可被机器解析 |
| 中文编码 | ✅ UTF-8 正常 |
| Fatal Error | ✅ 无 |
| Smarty Error | ✅ 无 |

### 上线的结构化数据（8 个实体）

| 类型 | 内容 |
|------|------|
| Organization | 大连海大印刷有限公司（电话/地址/成立年份/多语言） |
| LocalBusiness | 本地商家标记 |
| Product | 定制包装盒 |
| Product | 礼品盒 |
| Product | 披萨盒 |
| Product | 纸箱 |
| Product | 手提袋 |
| FAQPage | 3 个问答（大连包装盒厂家/披萨盒定制/礼品盒厂家） |

---

## 踩坑总结

### 🔴 Smarty 模板引擎与 JSON-LD 冲突

**问题**：Smarty 用 `{}` 作模板标签，JSON-LD 也用 `{}`，直接写入会被 Smarty 解析报错。

**✅ 已验证有效的解法**：用 `{literal}{/literal}` 包裹。

**其他可行方案（未实测）**：
- `{php}echo '...';{/php}` 通过 PHP 输出
- 服务器层面注入（Nginx/Apache output_filter）
- PHP 控制器中拼接变量

### 🟡 模板文件分工

- **head.html** = `\<head\>` 区域（meta/title/CSS/JS）← JSON-LD 放这里
- **header.html** = body 顶部（Logo/导航/轮播图）← 不放 JSON-LD

### 🟢 CMS 特性

- 777模板 CMS 是 **PHP 动态渲染**，不是预生成静态 HTML
- 修改模板后立即生效，不需要"生成全站"
- `/index.html` 返回 404，实际入口是 `/index.php`

---

## 服务器环境

| 项目 | 值 |
|------|-----|
| 主机商 | xinnet（新网） |
| 主机ID | host7326879 |
| 服务器路径 | /webHome/host7326879/www/ |
| 模板路径 | /webHome/host7326879/www/system/templates/default/ |
| CMS | 777模板 v5.3.29 |
| 模板引擎 | Smarty |
| 数据库 | MySQL 5.1.73 |

---

## 备份文件清单

| 文件 | 内容 |
|------|------|
| 后台登录手册.md | 账号密码、登录方法、后台入口 |
| 模板原始代码备份.md | 全部 23 个模板原始代码 |
| 前台原始HTML备份.md | 中/英/日三语首页渲染结果 |
| AI SEO改造尝试-踩坑日志.md | 本文档 |

---

## 下一步计划

1. **用 Google Rich Results Test 验证** — 确认 Google 能正确解析
2. **产品详情页也加结构化数据** — show_chanpin.html 模板
3. **监控各大 AI 平台是否能抓取** — 元宝/DeepSeek/豆包/通义/文心
4. **考虑加 BreadcrumbList** — 面包屑导航结构化数据
5. **考虑加 Review/Rating** — 如果有客户评价的话


---

## 附加修复：语言选择器乱码（2026-07-18）

**问题**：前台右上角语言选择器显示乱码 `ÃÂ¤ÃÂ¸ÃÂ­ÃÂ¦ÃÂÃÂ`，应为 `中文 / 英文 / 日本語`

**原因**：之前修改模板过程中，`header.html` 的语言选择器文字被双重编码（UTF-8 → Latin-1 → UTF-8）

**修复方法**：在后台模板管理中，将 `header.html` 的 `<div class="yuyan">` 区域内的乱码替换为正确的中文字符

**注意**：后台编辑界面可能会把中文显示为乱码（后台自身编码问题），但只要前台正常就不需要管。验证方法：直接访问前台页面，检查 `<div class="yuyan">` 区域是否正确显示 `中文 / 英文 / 日本語`
