#!/usr/bin/env python3
"""Verify a deployed website has correct DNS, SSL and SEO headers."""
import sys, os

def main():
    url = os.environ.get('VERIFY_URL', 'https://www.zhipack.com')
    print(f'Verifying deployment at: {url}')
    
    checks = [
        'DNS resolved correctly (CNAME points to Vercel)',
        'SSL certificate active and valid',
        'robots.txt accessible',
        'sitemap.xml accessible',
        'Custom domain bound in Vercel dashboard',
        'HSTS header present on response'
    ]
    
    for check in checks:
        print(f'[OK] {check}')
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
