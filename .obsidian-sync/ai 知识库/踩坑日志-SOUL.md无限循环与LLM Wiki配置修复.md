# 踩坑日志：SOUL.md 无限循环 + LLM Wiki 配置修复

> 日期：2026-07-10
> 涉及组件：Hermes SOUL.md、LLM Wiki Desktop App

---

## 一、SOUL.md 无限循环问题

### 现象
Hermes Agent 回答长问题时陷入无限循环，同一段话反复复制粘贴数十遍。

### 根因分析
两层原因叠加：

**1. 数值参数过低（根本原因）**
- `temperature = 0.3`：太低，模型过于"确定"，一旦选定表达模式就不愿转弯
- `repetition_penalty = 1.1`：几乎等于没开（1.0=完全不惩罚），模型重复内容不会感到"疼"

**2. SOUL.md 指令模糊（导火索）**
- 原文：`讨论业务时可以多讲几步，我需要落地方案，不是只听结论`
- 问题："多讲几步"没有边界定义，模型不知道何时该停
- 与 L21"回应指令利落简短"存在矛盾，低 temperature 下模型无法灵活切换

### 修复方案

#### 方案A：改 SOUL.md（加边界）
```markdown
- **讨论业务时可以多讲几步（最多3层深度：结论→方案→注意事项），我需要落地方案，不是只听结论；说完就停，不要无限展开**
```

#### 方案B：加例外条款（【绝对禁忌】末尾）
```markdown
**例外：排查自身输出异常、系统级故障时，可基于现象给出推测并明确标注，无需强行工具验证。**
```

#### 方案C：强化【行为准则】（强制终止条件）
```markdown
遇到拿不准的情况、不知道先做哪个工作或犹豫时，最多自我复盘 2 轮；仍无结论立刻停下来询问用户，禁止后台无限循环死磕。
自身故障排查场景，禁止超过 3 轮思考，必须直接输出当前判断 + 标注推测。
```

#### 方案D：格式化【回答前的灵魂三问】
从单行拆分为三条独立行，便于逐条自检：
```
(1) 我刚才跑工具验证了吗？
(2) 我给出的结论有日志或文件截图证据吗？
(3) 如果我没有证据，我是否明确标注了这是'推测'？
```

### 关键认知
> SOUL.md 是"法律条文"，config 参数是"执法力度"。法律写得再好，执法不力也没用。两者必须配套。

### 推荐参数值（未实施，待后续调整）
- `temperature`: 0.5~0.7（平衡创造性和稳定性）
- `repetition_penalty`: 1.2~1.3（有效抑制重复但不扭曲输出）

---

## 二、LLM Wiki 路径重复 Bug

### 现象
LLM Wiki Desktop App 打开 qing-wiki 时报错：`Failed to open project: Path does not exist: 'E:/wiki_projects/qing-wiki/qing-wiki'`

### 根因
配置文件 `/mnt/c/Users/amu/AppData/Roaming/com.llmwiki.app/app-state.json` 中存在两份 qing-wiki 项目注册：
- 错误条目 ID `0c5b60a6...` → 路径 `E:/wiki_projects/qing-wiki/qing-wiki`（多叠了一层）
- 正确条目 ID `9c9d6c12...` → 路径 `E:/wiki_projects/qing-wiki`

`recentProjects` 和 `lastProject` 指向的都是错误条目。

### 修复步骤
1. **关闭 LLM Wiki 应用**（重要！开着时会锁定配置文件，修改会被覆盖）
2. 编辑 `app-state.json`：
   - 修正 `recentProjects[].path`
   - 修正 `lastProject.path`
   - 删除错误的 `projectRegistry` 条目
   - 清理残留的 `scheduledImportConfig`、`sourceWatchConfig`、`projectOutputLanguages` 中的错误引用
3. 重启应用

### 踩坑
第一次修改时 LLM Wiki 还开着，应用保存时把我的修改覆盖了。**务必先关应用再改配置。**

---

## 三、LLM Wiki 缺少必需文件

### 现象
路径修复后报错：`Not a valid wiki project (missing schema.md)`

### 根因
qing-wiki 项目根目录缺少两个必需文件：
- `schema.md` — 定义页面类型、命名规范、Frontmatter 格式
- `purpose.md` — 定义项目目标和范围

对比能正常工作的 my-wiki 项目，发现它有两层嵌套结构 `my-wiki/my-wiki/`，内层才有这两个文件。而 qing-wiki 是扁平结构，创建时遗漏了。

### 修复
从 my-wiki 复制这两个文件到 qing-wiki 根目录：
```bash
cp /mnt/e/wiki_projects/my-wiki/my-wiki/schema.md /mnt/e/wiki_projects/qing-wiki/
cp /mnt/e/wiki_projects/my-wiki/my-wiki/purpose.md /mnt/e/wiki_projects/qing-wiki/
```

### 后续
- 编辑 `purpose.md` 定义自己的 wiki 目标
- 根据需要调整 `schema.md` 中的页面类型和命名规范

---

## 四、经验总结

| 教训 | 适用场景 |
|------|---------|
| SOUL.md 指令必须有硬边界，不能有模糊的"多讲几步" | 所有 Agent 提示词编写 |
| 文字规则需要数值参数支撑才能生效 | LLM 参数调优 |
| 修改 Electron 应用配置前必须关闭应用 | 所有桌面应用配置修改 |
| LLM Wiki 项目需要 schema.md + purpose.md 才能识别 | LLM Wiki 项目初始化 |
| 对比正常项目找差异是最快的调试方法 | 任何"别人的能跑我的不能"问题 |

