$token = "vcp_3ljUZJTreQQZOoC7qYYtYb0AB1JGV6UqTjQ0nyDCwCzW0f334501sy6p"
$teamId = "team_NGXWfFxSgU04Qc4U9AlWlHGT"
$projectId = "prj_JUyJylMGR4EoIe02w7jPAdCv0B0c"
Set-Location "E:\OneDrive\文档\个人主页 2"

$files = Get-ChildItem . -Recurse -File | Where-Object { $_.Name -ne "*.ps1" -and $_.Name -notin @("deploy_files.json") -and $_.Directory.Name -notin @(".git",".next","node_modules","public","images","skills") }

$payload = @{ name="print-html-v3"; framework="nextjs"; files=@() }
foreach($f in $files) {
    $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($f.FullName))
    $relativePath = $f.FullName.Replace("E:\OneDrive\文档\个人主页 2\", "").Replace("\", "/")
    $payload.files += @{ file=$relativePath; data=$b64 }
}

Write-Host "Files: $($files.Count)"
$jsonPayload = ConvertTo-Json -InputObject $payload -Depth 10
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllBytes("deploy_files.json", $utf8NoBom.GetBytes($jsonPayload))

$url = "https://api.vercel.com/v10/deployments?projectId=$projectId&teamId=$teamId"
$headers = @{"Authorization"="Bearer $token"; "Content-Type"="application/json"}
& curl.exe --ssl-no-revoke -X POST $url -H "Authorization: Bearer $token" --header 'Content-Type: application/json' "--data-binary=@deploy_files.json"
