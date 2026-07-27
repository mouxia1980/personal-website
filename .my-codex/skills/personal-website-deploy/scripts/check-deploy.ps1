#Requires -RunAsAdministrator
<#
.SYNOPSIS
Quick deploy verification checklist for personal website setup.
.DESCRIPTION
Checks DNS, SSL, and key config files exist for a deployed site.
.EXAMPLE
.\check-deploy.ps1 www.zhipack.com
#>

param([string]$Url = "www.zhipack.com")

Write-Host "[CHECK] Site URL: $Url" -ForegroundColor Yellow
Write-Host ""

$checks = @(
    @{ Name="DNS Resolution"; Cmd={ Resolve-DnsName (Split-Path $Url -Leaf) } },
    @{ Name="SSL Certificate"; Cmd={ Invoke-WebRequest -Uri "https://$Url" -UseBasicParsing -TimeoutSec 5 | Out-Null; [bool]$true } },
    @{ Name="robots.txt"; Cmd={ Test-Path "$PWD\public\robots.txt" } },
    @{ Name="sitemap.xml"; Cmd={ Test-Path "$PWD\public\sitemap.xml" } }
)

foreach($c in $checks) {
    try {
        $result = Invoke-Expression $c.Cmd -ErrorAction Stop
        if ($result -eq $true -or $result) {
            Write-Host "[PASS] $($c.Name)" -ForegroundColor Green
        } else {
            Write-Host "[FAIL] $($c.Name)" -ForegroundColor Red
        }
    } catch {
        Write-Host "[WARN] $($c.Name) - $_" -ForegroundColor Yellow
    }
}
