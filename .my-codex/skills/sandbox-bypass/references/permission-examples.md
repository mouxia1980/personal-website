# Permission Examples for Sandbox Bypass

## Example 1: Write to Obsidian Knowledge Base
Config: write_roots = [E:\Obsidian\codex知识库]
Command flag: require_escalated

## Example 2: Write to OneDrive Document Root
Config: write_roots = [E:\OneDrive文档\个人主页 2]
Use when: Syncing daily logs or updating project files outside sandbox

## Common Pitfalls
- Missing write_roots in config.toml → Permission Denied before elevation even runs
- Forgetting require_escalated on command → writes silently fail in non-workspace dirs
