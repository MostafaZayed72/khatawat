import json
import os
from collections import OrderedDict

def clean_duplicates(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Standard json.load will naturally keep the last occurrence of a key
    # which is often what we want if we've been appending names.
    # However, to be safe and clean, we'll parse it and write it back.
    try:
        data = json.loads(content, object_pairs_hook=OrderedDict)
        
        # Writing it back with indent will clean it. 
        # Since it's an OrderedDict, it preserves the order of the first occurrence 
        # (wait, json.loads with object_pairs_hook preserves order of first occurrence 
        # but the value will be the LAST one found if there are duplicates)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"Cleaned {file_path}")
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")

clean_duplicates('e:/projects/khatwat/i18n/locales/ar.json')
clean_duplicates('e:/projects/khatwat/i18n/locales/en.json')
