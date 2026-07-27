# Codex 每日经验总结 Skill

## 用途

每次会话结束前，自动将本次会话中的关键经验、踩坑记录、环境配置更新到 Obsidian 知识库和项目的 .agents/memories/ 目录，作为长期记忆。

## 触发规则

- 每个会话结束时（final channel 前）
- 用户明确说"记录经验"或"更新笔记"
- Git commit 后（可结合 git hook 触发）

## 工作流程

### 1. 收集经验

在会话过程中，将以下类型的信息记录下来：

- **环境问题**: 代理端口、权限问题、注册表配置
- **命令速查**: 新发现的实用 shell 命令组合
- **配置文件**: package.json、git config、proxy 设置
- **API/工具**: GitHub API、Vercel CLI、npm 等使用技巧
- **用户偏好**: 项目相关的数据（电话、邮箱、品牌名等）

### 2. 更新笔记

按以下格式写入 Obsidian 知识库的 i 知识库/codex/ 目录下，文件命名：YYYY-MM-DD-主题.md。

同时备份一份到项目的 .agents/memories/ 目录。

## 笔记格式模板

\\\markdown
---
tags: [codex/经验, <分类>]
created: YYYY-MM-DD
related: <相关项目>
alias: <简短标题>
---

# <标题>

## 背景
<什么问题、什么场景>

## 解决方案
<具体命令/配置/代码>

## 验证方式
<如何确认问题解决>

## 注意事项
<易错点、坑>
\\\

## 每日日志格式

\\\markdown
---
tags: [codex/daily]
date: YYYY-MM-DD
---

# <日期> Codex 工作日志

- [项目/任务]: <做了什么> | [[笔记文件名]]
- ...

## 今日踩坑
<简要列出今日遇到的问题>

## 今日收获
<记住的有用信息>
\\\

## 关键经验目录结构

`
obsidian知识库/
└── ai 知识库/
    └── codex/               ← Codex 专属经验笔记存放处
        ├── YYYY-MM-DD-主题.md
        └── ...
项目目录/
└── .agents/
    ├── SKILL.md             ← 本文件
    └── memories/            ← 本地备份的經驗笔记
`

## 注意事项

1. 如果 Obsidian 路径不可写（被 OneDrive/权限锁定），写入 \\tmp\\ 目录并通知用户手动同步
2. 每天只追加当日日志到 daily-log.md，避免重复创建
3. 经验笔记要简洁实用，不要长篇大论
4. 更新前检查文件是否已存在，避免重复写入相同内容

---

*Created: 2026-07-25*