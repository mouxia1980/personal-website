#!/usr/bin/env python3
import os, sys
from pathlib import Path

def check():
    home = os.path.expanduser('~/.codex')
    config_path = Path(home) / 'config.toml'
    if not config_path.exists():
        print('No config.toml found')
        return False
    content = config_path.read_text()
    roots = [l.strip() for l in content.split('\n') if 'write_roots' in l or '.\\' in l]
    if not roots:
        print('No write_roots found')
        return False
    for r in roots:
        print(f'  Found: {r}')
    return True

if __name__ == '__main__':
    sys.exit(0 if check() else 1)
