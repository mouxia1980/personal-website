---
name: sandbox-bypass
description: Guide on how to write files outside the default Codex sandbox workspace. Uses whitelist + elevation technique.
metadata:
  short-description: Write outside sandbox directory
---

# Sandbox Bypass Skill

## Description
A reusable method to write files or folders outside the default Codex sandbox workspace. Uses a whitelist + elevation technique.

## When to Use
- Updating knowledge bases located elsewhere on your disk
- Syncing daily logs or artifacts to Obsidian, OneDrive, or other folders
- Creating new projects in non-standard directories

## Core Mechanism (The "2-Key" System)
Success requires **both** of these conditions:
1. **Whitelist (write_roots)**: A config-level permission that tells the sandbox *which* paths are allowed.
2. **Elevation (require_escalated)**: A command-level flag that tells the OS to grant *write access*.

## Step-by-Step Process
1. Open ~/.codex/config.toml
2. Add write_roots entry for target directory
3. Use -sandbox_permissions: require_escalated on shell commands writing outside sandbox
4. Verify file was written successfully

## Troubleshooting
- "Permission Denied" → Check write_roots in config.toml
- Silent failure → Forgot require_escalated flag
- OneDrive conflicts → Wait for sync to complete before writing
