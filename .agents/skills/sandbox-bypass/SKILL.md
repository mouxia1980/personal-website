---
name: sandbox-bypass
description: Guide on how to write files outside the default Codex sandbox workspace.
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

Without the whitelist, the path is rejected (Permission Denied). Without elevation, the write fails silently or errors out in non-workspace folders.

## How to Use It
1. Update C:\Users\amu\.codex\config.toml with the write_roots.
2. Always use the equire_escalated permission flag for commands writing outside the sandbox.
