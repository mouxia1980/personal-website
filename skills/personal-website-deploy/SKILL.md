---
name: personal-website-deploy
description: Step-by-step guide to deploy a personal/brand website via GitHub, Vercel, and Cloudflare.
metadata:
  short-description: Deploy website via Github & Vercel
---

# Personal Website Deployment Guide

## Description
End-to-end deployment of a personal/brand website from GitHub code to public HTTPS domain via Vercel hosting and Cloudflare DNS/SEO optimization.

## Key Credentials & Tools Used
| Variable | Value | Usage |
|----------|-------|-------|
| GITHUB_TOKEN | ghp_xxxx... | GitHub API access for repo management |
| VERCEL_TOKEN | cp_xxxx... | Vercel Deployment API authentication |
| VERCEL_TEAM_ID | 	eam_NGXWfFxSgU04Qc4U9AlWlHGT | Vercel team scope targeting |
| CLOUDFLARE_TOKEN | cfat_xxxx... | Cloudflare DNS/SEO management |

## Common Pitfalls (Troubleshooting)
1. **Network Proxy Issues**: If sandbox cannot connect to GitHub/Vercel directly, use the local proxy tunnel at http://127.0.0.1:7897. Set $env:HTTP_PROXY before running node scripts.
2. **TypeScript Strict Mode**: Use native <img> tags instead of Next.js Image component if strict mode causes build errors in the sandbox environment.
3. **Encoding Strategy**: For binary files (images), upload via API using base64 strings; for text, use raw UTF-8 strings.
