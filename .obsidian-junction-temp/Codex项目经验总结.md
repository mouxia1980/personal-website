Codex项目经验总结

## 用户信息
阿木, 印刷销售主管, 专注纸制品包装
电话:13555985453, QQ:99589725, 邮箱:mouxia1980@outlook.com
工厂地址:大连市旅顺口区龙头工业园区龙天路21号
起订量:500件

## 部署平台
GitHub Pages: https://mouxia1980.github.io/personal-website/
Vercel: https://print-html-v3.vercel.app (自动从GitHub拉取)

## SEO优化
- JSON-LD结构化数据(LocalBusiness)
- meta含"印刷包装"关键词
- robots.txt + sitemap.xml
- AI搜索引擎优化:实体关系清晰,联系方式完整
- "印刷销售主管"是精准身份标签

## 产品线
核心品类:纸质包装盒/礼品盒/手提袋
用途长尾词:药品盒/保健品盒/食品盒/化妆品盒/电子盒/玩具盒/海鲜礼盒/大连印刷包装厂

## API Keys
Vercel:vcp_3ljUZJTreQQZOoC7qYYtYb0AB1JGV6UqTjQ0nyDCwCzW0f334501sy6p
GitHub PAT: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

## 域名计划
amupack.com (Cloudflare, ~$12/年)
amu=阿木, pack=包装

## 沙箱配置经验
- icacls授权CodexSandboxUsers写权限(require_escalated)
- config.toml保存时注意UTF-8编码,中文路径会被错误解析
- Node.js管道中文路径显示为???, 需用PowerShell子进程处理
