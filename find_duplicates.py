import json
import os
from collections import Counter

def find_duplicates(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We need to manually parse keys because json.load overrides duplicates
    import re
    keys = re.findall(r'"(.*?)"\s*:', content)
    
    counts = Counter(keys)
    duplicates = {k: v for k, v in counts.items() if v > 1}
    
    if duplicates:
        print(f"Duplicates in {file_path}:")
        for k, v in duplicates.items():
            print(f"  '{k}': {v} times")
    else:
        print(f"No duplicates in {file_path}")

find_duplicates('e:/projects/khatwat/i18n/locales/ar.json')
find_duplicates('e:/projects/khatwat/i18n/locales/en.json')
