#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
dlhaida.com 模板乱码解码器
作者: qing (AI Agent)
日期: 2026-07-19

背景：777模板 CMS 后台编辑器有编码 bug，读取时把 UTF-8 中文转成 Latin-1 乱码，
保存时又把乱码当 UTF-8 存回。多次"读→改→存"后产生多层编码。

解码规则：
- 四层编码：C3 83/82 C2 XX → 1 字节（4 字符→1 字节）
  第2字符为 0x83 时：原始 = 第4字符 ^ 0x40
  第2字符为 0x82 时：原始 = 第4字符
- 二层编码：C3/C2 XX → 1 字节（2 字符→1 字节）
  C3 XX → XX + 0x40
  C2 XX → XX（不变）
- 单层编码：连续 0x80-0xFF 字符 → UTF-8 字节序列
"""

def decode_all_garbled(text):
    """统一解码器：处理四层编码、二层编码、单层编码"""
    
    # ========== 第一遍：四层 + 二层编码 ==========
    result = bytearray()
    i = 0
    n = len(text)
    
    while i < n:
        if i + 1 < n:
            c0 = ord(text[i])
            c1 = ord(text[i+1])
            
            # 检查是否都在 0-255 范围
            if c0 < 256 and c1 < 256:
                # 先尝试四层编码：C3 83/82 C2 XX
                if i + 3 < n:
                    c2 = ord(text[i+2])
                    c3 = ord(text[i+3])
                    if c2 < 256 and c3 < 256 and c0 == 0xC3 and c2 == 0xC2 and c1 in (0x82, 0x83):
                        # 四层编码
                        if c1 == 0x83:
                            result.append(c3 ^ 0x40)
                        else:
                            result.append(c3)
                        i += 4
                        continue
                
                # 尝试二层编码：C3/C2 XX
                if c0 == 0xC3 and c1 >= 0x80:
                    # C3 XX → XX + 0x40
                    result.append(c1 + 0x40)
                    i += 2
                    continue
                elif c0 == 0xC2 and c1 >= 0x80:
                    # C2 XX → XX（不变）
                    result.append(c1)
                    i += 2
                    continue
        
        # 不符合任何模式，保留原字符
        if ord(text[i]) < 256:
            result.append(ord(text[i]))
        else:
            result.extend(text[i].encode('utf-8'))
        i += 1
    
    # 第一阶段结果：字节序列
    phase1 = bytes(result)
    
    # ========== 第二遍：单层编码 ==========
    # 连续 0x80-0xFF 字符 → UTF-8 字节序列
    phase1_str = phase1.decode('latin-1')
    
    final_result = []
    i = 0
    
    while i < len(phase1_str):
        c = phase1_str[i]
        code = ord(c)
        
        if 0x80 <= code <= 0xFF:
            # 收集连续的 0x80-0xFF 字符
            start = i
            garbled_bytes = bytearray()
            while i < len(phase1_str) and 0x80 <= ord(phase1_str[i]) <= 0xFF:
                garbled_bytes.append(ord(phase1_str[i]))
                i += 1
            
            # 尝试解码为 UTF-8
            try:
                decoded_text = garbled_bytes.decode('utf-8')
                # 检查是否包含 CJK 字符（确认是真正的乱码而非普通符号）
                has_cjk = any('\u4e00' <= ch <= '\u9fff' or '\u3040' <= ch <= '\u30ff' 
                             for ch in decoded_text)
                if has_cjk:
                    final_result.append(decoded_text)
                    continue
            except (UnicodeDecodeError, ValueError):
                pass
            
            # 解码失败，原样保留
            final_result.append(phase1_str[start:i])
        else:
            final_result.append(c)
            i += 1
    
    return ''.join(final_result)


# ==================== 使用示例 ====================

if __name__ == '__main__':
    import sys
    
    # 测试用例
    test_cases = [
        # 四层编码
        ("\xc3\x83\xc2\xa4\xc3\x82\xc2\xb8\xc3\x82\xc2\xad\xc3\x83\xc2\xa6\xc3\x82\xc2\x96\xc3\x82\xc2\x87", "中文"),
        # 二层编码
        ("\xc3\xa4\xc2\xb8\xc2\xad\xc3\xa6\xc2\x96\xc2\x87", "中文"),
        # 单层编码
        ("\xe4\xb8\xad\xe6\x96\x87", "中文"),
    ]
    
    print("=== 解码测试 ===")
    all_passed = True
    for garbled, expected in test_cases:
        decoded = decode_all_garbled(garbled)
        status = "✓" if decoded == expected else "✗"
        if decoded != expected:
            all_passed = False
        print(f"{status} '{garbled}' → '{decoded}' (期望: '{expected}')")
    
    # 命令行用法：传入文件路径
    if len(sys.argv) > 1:
        filepath = sys.argv[1]
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        decoded = decode_all_garbled(content)
        print(f"\n文件 {filepath} 解码完成")
        print(f"原始: {len(content)} 字符 → 解码: {len(decoded)} 字符")
        
        # 输出到 stdout 或指定输出文件
        if len(sys.argv) > 2:
            with open(sys.argv[2], 'w', encoding='utf-8') as f:
                f.write(decoded)
            print(f"已保存到 {sys.argv[2]}")
        else:
            print(decoded)
    
    sys.exit(0 if all_passed else 1)
