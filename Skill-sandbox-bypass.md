# Sandbox Bypass: Writing to External Folders

## Description
A reusable method to write files or folders outside the default Codex sandbox workspace. Uses a whitelist + elevation technique.

## When to Use
- Updating knowledge bases located elsewhere on your disk
- Syncing daily logs or artifacts to Obsidian, OneDrive, or other folders
- Creating new projects in non-standard directories

## Core Mechanism (The "2-Key" System)
Success requires **both** of these conditions:
1. **Whitelist (write_roots)**: A config-level permission that tells the sandbox *which* paths are allowed.
2. **Elevation (
equire_escalated)**: A command-level flag that tells the OS to grant *write access*.

Without the whitelist, the path is rejected (Permission Denied). Without elevation, the write fails silently or errors out in non-workspace folders.

## How to Use It

### Step 1: Add the Path to write_roots
Edit your configuration file at C:\Users\amu\.codex\config.toml. Find the [sandbox] section and add the full path of the folder you want to access:

`	oml
[sandbox]
write_roots = [
    "E:\\OneDrive\\文档\\个人主页 2",   # Your default workspace
    "E:\\Obsidian\\MyKnowledgeBase"     # The external target
]
`
*Note: Windows backslashes \ must be double-escaped (\\) in the config file.*

### Step 2: Run Commands with 
equire_escalated
When making a shell write (like Set-Content, echo >, or [System.IO.File]::WriteAllText), specify the elevated permission:

`powershell
# PowerShell Example
 = Get-Date -Format "yyyy-MM-dd"
 = "# Daily Log ..."
[System.IO.File]::WriteAllText("E:\Obsidian\MyKnowledgeBase\.md", , [System.Text.Encoding]::UTF8)

# In the command tool: sandbox_permissions = "require_escalated"
`

## Reliable Write Methods (PowerShell)
While standard Set-Content often works, .NET methods are more robust against encoding or permission errors in external paths:

`powershell
[System.IO.File]::WriteAllText("Target\Path.md", "Content", [System.Text.Encoding]::UTF8)
`

## Troubleshooting
| Symptom | Cause | Fix |
|---------|-------|-----|
| UnauthorizedAccessException | Path not in write_roots | Add path to config.toml whitelist |
| Permission Denied on write | Missing elevate flag | Add sandbox_permissions = "require_escalated" |
| File appears empty/encoding error | PowerShell vs .NET encoding mismatch | Use [System.Text.Encoding]::UTF8 explicitly with WriteAllText |
