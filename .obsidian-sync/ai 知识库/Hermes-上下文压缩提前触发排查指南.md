# Hermes 上下文压缩提前触发排查指南

> **症状**：对话聊到一半突然报错/触发压缩，远未到设置的压缩阈值比例

---

## 核心公式

```
有效输入窗口 = context_length - max_tokens
压缩触发点 = 有效输入窗口 × threshold_percent
```

## 关键参数说明

### `max_tokens`

| 项目 | 值 |
|------|-----|
| **是什么** | 模型输出预留的最大 token 空间 |
| **谁设置的** | Hermes custom provider 插件硬编码默认值 `65536` |
| **在哪改** | `~/.hermes/config.yaml` → `custom_providers` → `default_max_tokens` |
| **为什么影响压缩** | 输入+输出共享总上下文窗口，max_tokens 预留给输出，剩余才是输入可用空间 |

### `context_length`

- 模型的总上下文窗口大小
- 从 vLLM API 获取（`max_model_len`）
- 也可在 `custom_providers → models → context_length` 手动覆盖

### `threshold_percent`

- 压缩触发比例（0.0-1.0）
- 针对**有效输入窗口**计算，不是总上下文窗口

---

## 案例：为什么 108k 就触发压缩？

### 配置
- context_length: 185000
- threshold_percent: 0.9
- max_tokens: 65536（默认，用户未设置）

### 计算过程

```
有效输入窗口 = 185000 - 65536 = 119464
压缩触发点 = 119464 × 0.9 = 107518 ≈ 108k ✓
```

**用户以为**：185000 × 0.9 = 166500（差 58k！）

---

## 解决方案

### 方案 1：降低 max_tokens

在 `config.yaml` 的 `custom_providers` 下添加：

```yaml
custom_providers:
  - name: 你的provider名
    default_max_tokens: 16384  # 从 65536 降到 16384
```

### 不同 max_tokens 值的效果（185k 上下文，90% 阈值）

| max_tokens | 有效输入窗口 | 90% 压缩触发点 |
|-----------|------------|--------------|
| 65536（默认） | 119k | 108k |
| 32768 | 152k | 137k |
| 16384 | 169k | 152k |
| 8192 | 177k | 159k |
| 4096 | 181k | 163k |

### 方案 2：提高压缩阈值

在 Hermes Web UI 设置中调高 `compression.threshold`（最高 0.99）

### 推荐配置

对本地大模型（185k+ 上下文），推荐：
```yaml
default_max_tokens: 16384  # 输出通常不需要超过 16k
```

---

## 排查 Checklist

遇到压缩提前触发时，按顺序检查：

- [ ] 1. 确认 `context_length` 实际值（vLLM API vs 配置）
- [ ] 2. 检查 `max_tokens` 是否被默认值吃掉大量窗口
- [ ] 3. 用公式验证：`有效窗口 = context_length - max_tokens`
- [ ] 4. 计算实际触发点：`有效窗口 × threshold_percent`
- [ ] 5. 对比预期值，定位偏差来源

---

## 其他隐藏坑

1. **MINIMUM_CONTEXT_LENGTH = 64000**：压缩触发点不会低于 64k，即使公式计算结果更小
2. **context_length 配置 vs vLLM 返回值不一致**：配置值优先，但如果配置错误会导致计算偏差
3. **不同 provider 默认值不同**：custom provider 默认 65536，qwen-oauth 也是 65536

---

**最后更新**：2026-07-06
