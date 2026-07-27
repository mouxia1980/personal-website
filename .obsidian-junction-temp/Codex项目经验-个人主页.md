# Codex 项目经验 - 个人主页部署全流程 (更新于 2026-07-27)

## 一、用户基本信息
- **姓名**: 阿木
- **职位**: 印刷销售主管（专注纸制品包装）
- **电话**: 13555985453
- **QQ**: 99589725
- **邮箱**: mouxia1980@outlook.com
- **工厂地址**: 大连市旅顺口区龙头工业园区龙天路21号
- **起订量**: 500件起

## 二、平台账号信息
- **GitHub**: https://github.com/mouxia1980
- **Vercel**: https://vercel.com/mouxia
- **Vercel Token**: vcp_3ljUZJTreQQZOoC7qYYtYb0AB1JGV6UqTjQ0nyDCwCzW0f334501sy6p (Team ID: team_NGXWfFxSgU04Qc4U9AlWlHGT)
- **GitHub PAT**: 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
- **Cloudflare Token**: cfat_mXYRF0kQbCYpNdVLkxi9dUrFuM2iqxFWCK3bG28b0f8351a4 (Zone ID: 776af34715ca8651f63002e57b404095)
- **Cloudflare Plan**: Free Website

## 三、部署状态
- **主域名**: https://www.zhipack.com (已配置DNS, Proxy开启)
- **Vercel部署**: https://print-html-v3.vercel.app (自动从GitHub拉取代码)
- **项目ID**: prj_LZyDWFUmzwiAACF13TuTRhJFzkEH

## 四、Cloudflare DNS配置（已通过API更新）

| Record | Type | Content | Proxied |
|--------|------|---------|---------|
| @ | CNAME | cname.vercel-dns.com | ✅ Orange Cloud |
| www | CNAME | zhipack.com | ✅ Orange Cloud |

**修复过程**: 原来A记录 172.67.181.94 → 删除后创建CNAME指向Vercel DNS，解决 Error 1000。

## 五、Cloudflare SEO & 性能优化（API已配置完成）

### ✅ 已完成的优化项
| 功能 | 状态 | API端点 |
|------|------|---------|
| Brotli Compression | ✅ Enabled | /settings/brotli = on (Free计划默认开启) |
| HSTS Header | ✅ Enabled | /settings/security_header = {enabled:true, max_age:31536000, includeSubDomains:true, nosniff:true} |
| Rocket Loader | ✅ Enabled | /settings/rocket_loader = on (JS优化，加速页面加载) |
| HTTP/3 | ✅ Enabled | /settings/http3 = on |
| Always Online | ✅ Enabled | /settings/always_online = on (Vercel故障时展示缓存版本) |
| Browser Cache TTL | ✅ 24h | /settings/browser_cache_ttl = 86400 |

### ⚠️ Minify CSS/HTML/JS - API Bug
**症状**: PATCH /zones/{id}/settings/minify 返回 success: true, editable: true，但值始终为 {css:off, html:off, js:off}，modified_on: null

**原因**: Cloudflare Free 计划下 Minify 设置 API 不持久化（Dashboard UI可以正常开关）

**手动操作路径**: Cloudflare Dashboard → zhipack.com → **Speed (速度)** → **Optimization (优化)** → Minify Files → CSS/HTML/JS 全部 On

**替代方案**: Brotli压缩已启用，对HTML/CSS压缩效果更好。

### 🔍 响应头验证（GET / 返回）
`
content-encoding: br           ← Brotli压缩生效
strict-transport-security      ← HSTS已配置
cf-ray: [...]-LAX              ← Cloudflare LAX边缘节点
alt-svc: h3=":443"             ← HTTP/3可用
x-vercel-cache: HIT            ← Vercel缓存命中
cache-control: public, max-age=0  ← HTML未缓存(Next.js SSR正常行为)
`

## 六、SEO优化要点

### 网页端SEO（百度/搜狗/Google）
1. JSON-LD结构化数据 - LocalBusiness类型，含地址电话QQ邮箱
2. meta标签 - title含"印刷包装"关键词
3. robots.txt + sitemap.xml
4. h1标签突出"印刷销售主管"身份
5. 响应式设计适配手机端

### AI搜索引擎优化（文心/通义/豆包/DeepSeek）
1. 明确实体关系: "阿木-印刷销售主管-大连印刷厂"
2. 联系方式完整: 电话+邮箱+QQ并列出现
3. 业务描述具体化: 产品品类+用途场景
4. JSON-LD帮助AI理解业务范围

### AI SEO核心逻辑
- AI搜索引擎抓取网页全文，分析实体关系
- "印刷销售主管"是精准身份标签
- 地理位置+品类+联系方式齐全增加可信度

## 七、产品线架构（SEO关键词方向）
- **核心品类**: 纸质包装盒、纸质礼品盒、手提袋
- **用途长尾词**: 药品/保健品/食品/化妆品/电子产品/玩具包装盒定制、海鲜礼盒批发、大连印刷包装厂

## 八、技术避坑指南

### Cloudflare Proxy 连接模式（API调用必备）
**问题**: Node.js https.Agent({proxy: ...}) 通过 7897 代理失败（错误信息不完整）；curl --proxy works but needs manual config

**解决方案 - net/tls CONNECT tunnel**:
`javascript
var proxySocket = new net.Socket();
proxySocket.connect(7897, '127.0.0.1', function() {
    proxySocket.write('CONNECT api.cloudflare.com:443 HTTP/1.1\r\n...');
});
var tlsSocket = tls.connect({socket: proxySocket, servername: 'api.cloudflare.com'});
`

**关键发现**: CF API 响应使用 Transfer-Encoding chunked，需要正确解析 chunk 大小前缀（十六进制）来提取JSON body。

### config.toml配置
[sandbox]
write_roots = [
    "E:\\OneDrive\\文档\\个人主页 2",
    "E:\\Obsidian\\codex 知识库"
]

### Minify API Bug (已记录)
Cloudflare Free计划 /zones/{id}/settings/minify PATCH返回success但值不更新。需Dashboard手动操作。
