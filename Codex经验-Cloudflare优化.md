# Cloudflare SEO 与性能优化记录 (2026-07-27)

## ✅ API 自动生效项
| 功能 | 状态 | 验证方式 |
|------|------|----------|
| Brotli 压缩 | ✅ 已启用 | content-encoding: br |
| HSTS Header | ✅ 已配置 | max-age=31536000; includeSubDomains; nosniff |
| Rocket Loader | ✅ 已开启 | JS 加载优化器 |
| HTTP/3 (QUIC) | ✅ 已启用 | alt-svc: h3=":443" |
| Always Online | ✅ 已开启 | Vercel 故障时展示缓存版本 |
| 浏览器缓存 TTL | ✅ 改为 24h | browser_cache_ttl = 86400 |

## ⚠️ 需 Dashboard 手动操作项
**Minify (CSS/HTML/JS)**：Cloudflare Free 计划 API Bug（PATCH 返回 success 但值不更新）。
- **路径**: Cloudflare → zhipack.com → Speed → Optimization → Minify Files
- **操作**: CSS、HTML、JS 全部勾选 On

## 📝 API 调用避坑指南
1. **代理模式**: 推荐 net/tls CONNECT tunnel (127.0.0.1:7897)，Node.js https.Agent 偶发失败
2. **API 格式**: Settings 必须用 {"value":{"key":"value"}} 结构
3. **Chunked 解析**: 响应默认启用 chunked，JSON 前需剥离十六进制大小前缀
4. **Minify Bug**: 有 modified_on 时间戳才算真正写入；该接口始终返回 null

## 📊 响应头验证 (GET /)
content-encoding: br
strict-transport-security: max-age=31536000; includeSubDomains
x-vercel-cache: HIT
cache-control: public, max-age=0, must-revalidate
cf-ray: a214d9b808c6f472-LAX

## 📂 Obsidian 同步说明
文件位于项目工作区，Obsidian 可通过打开 E:\OneDrive\文档\个人主页 2 文件夹访问。