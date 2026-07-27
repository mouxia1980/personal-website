# Personal Website Deployment Steps (GitHub → Vercel → Cloudflare)

## Phase 1: GitHub Setup
1. Create repo, configure remote URL
2. Push code with git push origin master
3. Ensure .gitignore is present

## Phase 2: Vercel Integration
1. Connect GitHub repo to Vercel dashboard
2. Set framework to next.js (auto-detected usually)
3. Configure environment variables in Vercel settings
4. Trigger initial deployment

## Phase 3: Cloudflare DNS & Domain
1. Register domain at Cloudflare Registrar (~$5/yr for .com)
2. Add DNS records in Cloudflare dashboard:
   - A record: @ → [Vercel IP] or CNAME → cname.vercel-dns.com
   - Proxy status: Orange cloud (ON)
3. Wait for SSL propagation (up to 15 min)

## Phase 4: SEO Optimization
1. Configure HSTS header in Cloudflare Page Rules
2. Enable Brotli compression, HTTP/3 (QUIC), Rocket Loader
3. Add robots.txt and sitemap.xml to public directory
4. Set Browser Cache TTL = 86400s

## Common Pitfalls
- DNS propagation delay: wait up to 15 minutes after Cloudflare setup
- Vercel build errors: check framework detection, ensure next.config.mjs is valid
- SSL errors (Error 525): verify origin server accepts HTTPS from Vercel IPs
