# 📦 Cloudflare SEO 与性能优化记录

## ✅ API 自动生效项 (2026-07-27)
| 功能 | 状态 | 验证方式 |
|------|------|----------|
| **Brotli 压缩** | ✅ 已启用 | content-encoding: br |
| **HSTS Header** | ✅ 已配置 | max-age=31536000; includeSubDomains; nosniff |
| **Rocket Loader** | ✅ 已开启 | JS 加载优化器，加速首屏渲染 |
| **HTTP/3 (QUIC)** | ✅ 已启用 | lt-svc: h3=":443" |
| **Always Online** | ✅ 已开启 | Vercel 故障时自动展示缓存版本 |
| **浏览器缓存 TTL** | ✅ 改为 24h | rowser_cache_ttl = 86400 |

## ⚠️ 需 Dashboard 手动操作项
**Minify (CSS/HTML/JS 压缩)**：Cloudflare Free 计划 API 存在 Bug（PATCH 返回 success 但值不更新）。
- **路径**: Cloudflare → zhipack.com → Speed → Optimization → Minify Files
- **操作**: 将 CSS、HTML、JS 全部勾选为 On
- **备注**: Brotli 已开启，压缩比通常优于 Minify，对实际体验影响极小。

## 📝 API 调用关键记录 (避坑指南)
1. **代理连接模式**: Node.js https.Agent({proxy: ...}) 在沙箱中偶发失败。推荐使用 
et/tls CONNECT tunnel 直接通过 127.0.0.1:7897 建立隧道。
2. **Cloudflare API 格式**: Settings 更新必须严格使用 {\"value\":{\"key\":\"value\"}} 结构，否则返回 Invalid value。
3. **Chunked Transfer-Encoding**: CF API 响应默认启用 chunked，解析 JSON body 前需剥离十六进制大小前缀（如 4e6\r\n...）。
4. **Minify API Bug**: 验证发现请求有 modified_on 时间戳才算真正持久化。Minify 接口无论传什么都返回 
ull，确认为 Free 计划限制。

## 📊 响应头最终验证 (GET /)
`	ext
HTTP/1.1 200 OK
content-type: text/html; charset=utf-8
content-encoding: br
strict-transport-security: max-age=31536000; includeSubDomains
x-vercel-cache: HIT
cache-control: public, max-age=0, must-revalidate
cf-ray: a214d9b808c6f472-LAX
`
> 注：cache-control: max-age=0 说明 HTML 未缓存，这是 Next.js SSR 的正常行为。若需前端 SEO 缓存优化，后续可配置 Cloudflare Cache Rules。

## 🔄 Obsidian 同步说明
- 本文件已更新到项目工作目录 .obsidian-junction-temp/
- **查看方法**: 打开 Obsidian → 左上角文件夹图标 → 选择 E:\OneDrive\文档\个人主页 2 即可看到该笔记。
