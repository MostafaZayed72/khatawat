
path = r"e:\projects\khatwat\app\pages\part\[partId]\lesson\[lessonId].vue"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Current state likely:
# class="text-[200px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">ُ</div>
# Or similar regex match.

new_style = 'class="text-[200px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[15%]">ُ</div>'

import re
# Regex to match the current Damma div class
pattern = r'class="text-\[200px\].*?">ُ</div>'

match = re.search(pattern, content)
if match:
    print(f"Found current Damma: {match.group(0)}")
    content = content.replace(match.group(0), new_style)
    print("Replaced Damma with lower position (-15%).")
else:
    print("Could not find 200px Damma match. Trying 180 or 100?")
    pattern_backup = r'class="text-\[\d+px\].*?">ُ</div>'
    match_backup = re.search(pattern_backup, content)
    if match_backup:
        print(f"Found backup match: {match_backup.group(0)}")
        content = content.replace(match_backup.group(0), new_style)
        print("Replaced backup match.")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
