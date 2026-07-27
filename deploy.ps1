# Deploy script for personal website to Vercel
# Run: .\deploy.ps1
param([string])

if (-not ) {
     = "vcp_3ljUZJTreQQZOoC7qYYtYb0AB1JGV6UqTjQ0nyDCwCzW0f334501sy6p"
}

Write-Host "=== Deploying personal website ===" -ForegroundColor Cyan

# Build project
Write-Host "
[1/3] Building Next.js project..." -ForegroundColor Yellow
npm run build
if ( -ne 0) { Write-Error "Build failed"; exit 1 }

# Deploy to Vercel (auto-detects vercel.json / package.json config)
Write-Host "
[2/3] Deploying to Vercel..." -ForegroundColor Yellow
 = 
npx vercel --token  --prod --scope mouxia --name print-html-v3 --yes
if ( -ne 0) { Write-Error "Deploy failed"; exit 1 }

# Flush Cloudflare cache
Write-Host "
[3/3] Flushing Cloudflare cache..." -ForegroundColor Yellow
 = "cfat_mXYRF0kQbCYpNdVLkxi9dUrFuM2iqxFWCK3bG28b0f8351a4"
 = "776af34715ca8651f63002e57b404095"
 = @{ purge_everything = True } | ConvertTo-Json
 = @{ Authorization = "Bearer "; "Content-Type" = "application/json" }
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones//purge_cache" -Headers  -Method Post

Write-Host "
=== Deployment complete! ===" -ForegroundColor Green
