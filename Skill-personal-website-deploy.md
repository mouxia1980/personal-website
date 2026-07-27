# Personal Website Deployment: GitHub → Vercel → Cloudflare

## Description
End-to-end deployment of a personal/brand website from GitHub code to public HTTPS domain via Vercel hosting and Cloudflare DNS/SEO optimization. Designed for repeatable use across projects.

## When to Use
- New personal brand or business website needing end-to-end setup
- Migrating an existing site to Vercel + Cloudflare stack
- Configuring domain binding between Vercel and Cloudflare
- Optimizing Cloudflare settings for SEO, speed, and security

---

## Prerequisites & Configuration Table

| Variable | Format | Where to Find |
|----------|--------|---------------|
| GITHUB_TOKEN | `ghp_xxx` | GitHub → Settings → Developer settings → Personal access tokens (repo scope) |
| VERCEL_TOKEN | `vcp_xxx` | Vercel → Settings → Tokens (Team access) |
| VERCEL_TEAM_ID | `team_xxx` | URL bar at vercel.com when viewing team settings |
| CLOUDFLARE_TOKEN | `cfat_xxx` | Cloudflare → My Profile → API Tokens (Zone Edit permission) |
| PROXY_PORT | int (default: 7897) | Local proxy (vortex/clash/etc.) — only needed for Cloudflare API calls |
| DOMAIN | string | Registered domain, e.g. `zhipack.com` |
| ZONE_ID | string | Cloudflare → Your Domain → Zone ID (shown in URL bar) |

---

## Architecture Overview

```
GitHub Repo  →  Vercel CI/CD (auto-deploy on push)  →  *.vercel.app subdomain
                                                                ↓
Custom domain  ←→  Cloudflare DNS + CDN + Security + SEO Optimizations  →  Public HTTPS site
```

---

## Step 1: GitHub Project Setup

### Initialize & Push
```bash
git init
git add -A
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Verify Upload
Visit `https://github.com/<username>/<repo>` to confirm files appear.

> **Tip**: The deploy script (`deploy-fetch.mjs`) can also upload from local files directly to Vercel without pushing first — useful for rapid iteration.

---

## Step 2: Vercel Project Creation & Auto-Deploy

### Method A: Dashboard (Recommended, easiest)
1. Go to `vercel.com/new` → Import Git Repository
2. Select your repo → Next.js framework detected automatically
3. Deploy → Site lives at `https://<project-name>.vercel.app`
4. Any future push to `main` triggers automatic rebuild

### Method B: API (for automation)
See `deploy-fetch.mjs` in the project — uploads all source files directly to Vercel via v13/deployments endpoint with Next.js build config.

---

## Step 3: Cloudflare Zone & DNS Setup

### 3a. Add Zone
1. Cloudflare Dashboard → "Add a Site" → Enter domain (e.g., `zhipack.com`)
2. **Plan selection**: Choose **Free** for personal/small business sites — includes CDN, DDoS protection, SSL, and basic Bot Fight Mode
3. Cloudflare assigns NS records automatically

### 3b. Update Registrar NS Records
- Copy the two NS names from Cloudflare
- Go to your domain registrar (Cloudflare Registrar, Namecheap, etc.) → DNS/NS management
- Replace existing NS records with Cloudflare's
- Wait for propagation (usually minutes to hours)

### 3c. DNS Records — Critical for Vercel
After zone is active and NS propagated, configure these DNS records:

| Record | Type | Content | Proxied (Orange ☁️) | Purpose |
|--------|------|---------|---------------------|---------|
| `@` (root) | CNAME | `cname.vercel-dns.com` | ✅ Orange | Root domain → Vercel origin |
| `www` | CNAME | `<your-domain>` (e.g., `zhipack.com`) | ✅ Orange | WWW → redirect to root domain |

> **Critical**: Always use `cname.vercel-dns.com`, NOT a raw IP address. Vercel's IPs change frequently; the CNAME target is managed by Vercel.

---

## Step 4: Fix Error 1000 (New Zone Bug)

**Symptom**: Visiting your domain shows "Error 1000: DNS resolution error"

**Cause**: Cloudflare creates a new zone with a default IP Access Rule set to **Allow**, whitelisting only your current IP. All other visitors are blocked.

**Fix**: 
- Cloudflare → Security → IP Access Rules
- Find the rule with action "Allow" and change it to **"Block"**
- If no rule exists, create a new rule: Action=Block, IP = 0.0.0.0/0 (to block all by default), then add exceptions

---

## Step 5: Vercel Custom Domain Binding

### In Vercel Dashboard
1. Your Project → Settings → Domains
2. Add domain: `zhipack.com` (and optionally `www.zhipack.com`)
3. Vercel checks DNS automatically — status goes from "Pending Verification" to "Verified"
4. Set as **primary domain** so `www` redirects to root

### In Vercel Project Settings → Deployment Protection
- Disable or configure "Production Branch" protection if needed for staging environments

---

## Step 6: Cloudflare SEO & Performance Optimization

### API Configurable (via PATCH /zones/{id}/settings)
All settings use body format `{"value": {"key": value}}`. Verify with `modified_on != null`.

| Setting | Value | Effect |
|---------|-------|--------|
| `brotli` | `on` | Brotli compression (best ratio, always enabled on new zones) |
| `rocket_loader` | `on` | Async JS loading — faster First Contentful Paint |
| `always_online` | `on` | Show cached page when origin Vercel is down |
| `browser_cache_ttl` | `86400` (24h) | Edge caches static assets for 24 hours |
| `http3` | `on` | HTTP/3 (QUIC) — reduced latency for mobile users |

### HSTS Header Configuration
```json
PATCH /zones/{id}/settings/security_header
{
  "value": {
    "strict_transport_security": {
      "enabled": true,
      "max_age": 31536000,
      "include_subdomains": true,
      "nosniff": true
    }
  }
}
```

### Must Do Manually in Dashboard (Cloudflare Free Plan Bug)
**Minify CSS/HTML/JS**: Cloudflare API returns success but value never changes on Free plan.
- **Path**: Speed → Optimization → Minify Files
- **Turn ON**: CSS, HTML, and JS
- This is the #1 missed optimization — don't skip it

### Optional Dashboard Settings (Recommended for SEO)
- **Bot Fight Mode** (Security → Bots): On — blocks malicious bots while allowing Google/Baidu/Sogou crawlers
- **Cache Rules** (Caching → Cache Rules): Create rule for static assets (.js/.css/.png/.jpg/.svg/.woff2) with 1-year TTL
- **SSL/TLS** (Edge Certificates): Set to "Full" or "Flexible" depending on origin SSL status

---

## Step 7: Verification Checklist

Run these checks before handing off the site:

- [ ] GitHub repo exists with latest code committed and pushed
- [ ] Vercel project deployed, accessible at `.vercel.app` URL (no build errors)
- [ ] Cloudflare zone active, NS records updated on registrar
- [ ] DNS record `@` → CNAME `cname.vercel-dns.com` (proxied=orange ☁️)
- [ ] DNS record `www` → CNAME root domain (proxied=orange ☁️)
- [ ] Vercel custom domain verified (API: `"verified"` status = true)
- [ ] Response header includes `content-encoding: br` (Brotli compression active)
- [ ] Response header includes `strict-transport-security: max-age=31536000; includeSubDomains` (HSTS active)
- [ ] Response header includes `cf-ray:` (Cloudflare proxy confirmed)
- [ ] Response header includes `alt-svc: h3=":443"` (HTTP/3 enabled)
- [ ] Minify CSS/HTML/JS turned ON in Cloudflare Dashboard (API bug workaround)
- [ ] Bot Fight Mode enabled in Security → Bots
- [ ] robots.txt references correct domain URL
- [ ] sitemap.xml references correct domain URL

### Quick Header Check (via curl)
```bash
curl -I https://yourdomain.com
# Should show: HTTP/2 200, content-encoding: br, cf-ray header, HSTS
```

---

## Step 8: Post-Deployment SEO Enhancements

### robots.txt (public/robots.txt)
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### sitemap.xml (public/sitemap.xml)
List all pages with correct domain URL. Update `lastmod` when content changes.

### JSON-LD Structured Data (in layout.tsx or page.tsx)
Add for LocalBusiness if location-based:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "阿木 - 印刷包装",
  "description": "专注纸制品包装的印刷销售主管，提供包装盒、礼品盒、手提袋定制服务",
  "telephone": "+86-13555985453",
  "email": "mouxia1980@outlook.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "龙头工业园区龙天路21号",
    "addressLocality": "大连市旅顺口区",
    "addressRegion": "辽宁",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-13555985453",
    "contactType": "sales"
  }
}
</script>
```

### Meta Tags (in layout.tsx `export const metadata`)
- `title`: Include target keyword (e.g., "阿木 - 印刷销售主管 | 纸制品包装定制")
- `description`: 150-160 chars, include keywords naturally
- Open Graph tags for social sharing

---

## Troubleshooting Reference

### Error 1000: DNS resolution error
**Cause**: Default IP allow-list rule blocks all non-whitelisted IPs in new zones.  
**Fix**: Change Allow → Block in Security → IP Access Rules.

### Error 525: SSL Handshake Failed
**Cause**: Cloudflare "Full Strict" mode but origin Vercel doesn't have a valid custom SSL cert.  
**Fix**: In Cloudflare SSL/TLS → Edge Certificates, set mode to **"Full"** (not "Full Strict") unless you've uploaded your own cert to Vercel.

### Site loads on computer but not mobile (China)
Could be the IP Access Rule blocking domestic IPs or Great Firewall interference. The Block rule fix in Step 4 resolves this for most cases.

### SSR Pages Show `cache-control: max-age=0`
Normal for Next.js server-rendered pages. To cache HTML at Cloudflare edge, add a Cache Rule (Caching → Cache Rules) targeting your domain's home page with appropriate TTL.

---

## API Calling Conventions

### Proxy Tunnel Pattern (Required for Cloudflare API in Sandboxed Environments)
Direct outbound HTTPS fails in sandbox environments. Use the CONNECT tunnel through local proxy:

```javascript
const net = require('net');
const tls = require('tls');

function cfRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();
    socket.connect(7897, '127.0.0.1', () => {
      socket.write(`CONNECT api.cloudflare.com:443 HTTP/1.1\r\nHost: api.cloudflare.com:443\r\nProxy-Connection: close\r\n\r\n`);
      // Read tunnel established response
      let data = '';
      socket.on('data', (chunk) => {
        data += chunk.toString();
        if (data.includes('\r\n\r\n')) {
          const tlsSocket = tls.connect({
            socket: socket,
            servername: 'api.cloudflare.com',
            ALPNProtocols: ['https'],
          });
          
          tlsSocket.on('secureConnect', () => {
            const reqBody = body ? JSON.stringify(body) : '';
            const request = `POST ${path} HTTP/1.1\r\n` +
              `Host: api.cloudflare.com\r\n` +
              `Authorization: Bearer ${process.env.CLOUDFLARE_TOKEN}\r\n` +
              `Content-Type: application/json\r\n` +
              `Content-Length: ${reqBody.length}\r\n` +
              `\r\n${reqBody}`;
            tlsSocket.write(request);
          });
          
          let responseData = '';
          tlsSocket.on('data', (chunk) => { responseData += chunk.toString(); });
          tlsSocket.on('end', () => {
            tlsSocket.destroy();
            // Parse chunked response...
            resolve(responseData);
          });
        }
      });
    });
    socket.on('error', reject);
  });
}
```

### Cloudflare API Format Rules
- Settings endpoints: `{"value": {"key": value}}` — always wrap in `"value"` key
- DNS records: `{type, name, content, ttl, proxied}` — no wrapper
- Verify persistence: check response field `modified_on` is not null

### Common Endpoints
| Operation | Method | Endpoint | Body |
|-----------|--------|----------|------|
| Get zone settings | GET | `/zones/{zone_id}/settings` | — |
| Update single setting | PATCH | `/zones/{zone_id}/settings/{setting_name}` | `{"value": ...}` |
| List DNS records | GET | `/zones/{zone_id}/dns_records` | — |
| Create DNS record | POST | `/zones/{zone_id}/dns_records` | `{type, name, content, ttl, proxied}` |
| Update DNS record | PATCH | `/zones/{zone_id}/dns_records/{record_id}` | `{content, proxied, ...}` |
| Delete DNS record | DELETE | `/zones/{zone_id}/dns_records/{record_id}` | — |

---

## Known Bugs & Limitations

1. **Minify API Bug (Cloudflare Free Plan)**: `PATCH /zones/{id}/settings/minify` returns `{success:true, editable:true}` but value persists as off. Always use Dashboard UI for this setting. The workaround works reliably every time.

2. **Chunked Transfer Encoding**: Cloudflare API responses default to chunked encoding. Must strip hex-size-prefix lines before `JSON.parse()`:
   ```
   <HEX_LENGTH>\r\n<DATA>\r\n...
   ```

3. **SSR Page Caching**: Next.js SSR pages return `cache-control: max-age=0` by design. HTML caching requires separate Cloudflare Cache Rules, not the browser_cache_ttl setting.

4. **NS Propagation Time**: After updating NS records at registrar, DNS propagation can take anywhere from 5 minutes to 48 hours. Check progress with `dig NS yourdomain.com`.

---

## Deployment Flow Summary (One-Page Quick Reference)

```
1. GitHub: git init → add files → commit → push to new repo
2. Vercel: Import repo via Dashboard → auto-deploy → verify .vercel.app URL
3. Cloudflare: Add domain zone → copy NS records → update registrar
4. Wait for NS propagation (check with dig)
5. DNS: Create CNAME @ → cname.vercel-dns.com, CNAME www → root domain (both proxied=orange)
6. Fix Error 1000: Change Allow IP rule → Block in Security → IP Access Rules
7. Vercel: Add custom domain in Settings → Domains → wait for verification
8. Cloudflare SEO: API settings (brotli, rocket_loader, HSTS) + Dashboard (minify CSS/HTML/JS on)
9. Verify: curl -I https://yourdomain.com — check for br encoding, cf-ray, HSTS headers
10. Post-deploy: Update robots.txt + sitemap.xml with correct domain URL, add JSON-LD structured data
```
