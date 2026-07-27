# End-to-End Deployment Flow (Step-by-Step)

## Prerequisites Checklist
- [ ] GitHub account and repo created
- [ ] Vercel account linked to GitHub
- [ ] Cloudflare account + domain registered at Registrar
- [ ] API tokens: GitHub PAT, Vercel Token, Cloudflare Token

## Phase 1: Code → GitHub (Manual or Scripted)
```bash
git remote add origin https://github.com/mouxia1980/personal-website.git
git branch -M master && git push -u origin master
```

## Phase 2: Vercel Integration
1. Go to vercel.com → New Project → Select GitHub repo
2. Framework auto-detected as "next.js" (if using Next.js)
3. Environment variables set in Vercel Dashboard > Settings > Environment Variables
4. Deploy button → Vercel builds and hosts at `*.vercel.app`

## Phase 3: Cloudflare DNS Setup
1. Cloudflare.com → Add Site → Enter domain (e.g., zhipack.com)
2. Select "Free" plan → Review DNS records → Add Record
3. In Cloudflare DNS page, change proxy status to "Orange Cloud ON" (proxied)
4. This routes traffic through Cloudflare CDN for SSL + speed

## Phase 4: Domain Binding Vercel ↔ Cloudflare
1. Vercel Dashboard → Project Settings → Domains → Add "zhipack.com"
2. Vercel creates CNAME record pointing to cname.vercel-dns.com
3. Verify domain ownership in Vercel dashboard
4. Wait for DNS propagation (typically 5-15 minutes)

## Phase 5: SSL Certificate + Security Headers
Cloudflare → SSL/TLS → Edge Certificates:
- Protocol Version: Off (auto-negotiate)
- Minimum TLS Version: TLSv1.2
- HSTS: Enabled with max-age=31536000; includeSubDomains

## Phase 6: SEO Optimization
Cloudflare → Speed → Optimization:
- [x] Brotli Compression ON
- [x] HTTP/3 (QUIC) ON
- [x] Rocket Loader ON
- Browser Cache TTL: 86400 seconds

Vercel → Static Assets:
- robots.txt, sitemap.xml in public/ directory
- Meta tags in page.tsx for social sharing and search descriptions
