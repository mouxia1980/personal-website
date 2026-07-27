---
name: personal-website-deploy
description: Deploy a personal or brand website from source code to public HTTPS domain end-to-end. Use when connecting GitHub repo to Vercel, binding custom domain, configuring Cloudflare DNS and SSL, setting up SEO headers (HSTS, robots.txt), enabling Brotli compression and HTTP/3, or troubleshooting deployment errors (525 SSL, 1000 DNS). Applicable for Next.js, static HTML, or any web project needing production-ready deployment.
metadata:
  short-description: End-to-end website deployment via Github + Vercel + Cloudflare
---

# Personal Website Deployment Guide

## Overview
Deploy a personal/brand website from GitHub source code to a public HTTPS domain with full SEO optimization. Covers all stages: code push, Vercel hosting setup, custom domain binding, Cloudflare SSL/proxy, and performance/security headers.

## When to Use
- New personal website needs production deployment
- Migrating existing site to Vercel + Cloudflare stack
- Custom domain (e.g., zhipack.com) binding between Vercel and DNS provider
- SEO optimization: HSTS, robots.txt, sitemap.xml, meta tags
- Troubleshooting deployment errors (SSL handshake failures, DNS propagation delays, build errors)

## Deployment Steps

### Step 1: Push Code to GitHub
`ash
git remote add origin https://github.com/<user>/<repo>.git
git add . && git commit -m "Initial deploy"
git push origin master
`
**Note:** Sandbox proxy issues → set $env:HTTP_PROXY="http://127.0.0.1:7897" before pushing.

### Step 2: Connect to Vercel
- Dashboard → New Project → Import from GitHub repo
- Framework auto-detected (next.js selected automatically)
- Configure environment variables in Settings > Environment Variables
- Deployment triggers automatically on connect and on every git push

### Step 3: Domain Configuration
1. Register domain at Cloudflare Registrar (~/year for .com)
2. In Vercel → Settings → Domains → Add custom domain
3. DNS records auto-created by Vercel: @ CNAME to cname.vercel-dns.com
4. Ensure proxy status is Orange Cloud (ON) in Cloudflare DNS

### Step 4: SSL and Security
- Cloudflare → SSL/TLS → Mode: Full (strict)
- Speed optimizations: Brotli ON, HTTP/3 (QUIC) ON, Rocket Loader ON
- Add HSTS header: max-age=31536000; includeSubDomains

### Step 5: SEO Assets
Place in public/ directory:
- obots.txt — Allow all crawlers
- sitemap.xml — List key pages
- Update meta tags in page.tsx for social sharing and search descriptions

## Troubleshooting Reference
| Error | Cause | Fix |
|-------|-------|-----|
| 525 SSL Handshake | Cloudflare proxy misconfigured | Ensure DNS A/CNAME has orange cloud ON; Vercel origin must accept HTTPS |
| DNS propagation delay | Nameserver changes not propagated | Wait up to 15 minutes after updating Cloudflare nameservers |
| Build fails on strict mode | Next.js Image component errors | Replace with native <img> tags; set strict: false in tsconfig.json |

## Key Credentials Used
- GITHUB_TOKEN (ghp_...) → GitHub API for repo operations
- VERCEL_TOKEN (vcp_...) → Vercel Deployment API
- CLOUDFLARE_TOKEN (cfat_...) → Cloudflare DNS/SSL management
