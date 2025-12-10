
path = r"e:\projects\khatwat\app\pages\part\[partId]\lesson\[lessonId].vue"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Damma styling - Target the one we just put in
# Old content (from previous fix):
# class="text-[100px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4">ُ</div>
# Need to match it exactly.

old_part = 'class="text-[100px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4">ُ</div>'
new_part = 'class="text-[200px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">ُ</div>'

if old_part in content:
    content = content.replace(old_part, new_part)
    print("Replaced Damma div styling with larger size.")
else:
    print("Could not find Damma div exact match. Please check file content.")
    # Debug: print what IS there
    if 'leading-none font-arabic absolute' in content:
        print("Found partial match, finding full string...")
        import re
        # Try to find the line
        pattern = r'class="text-\[100px\].*?">ُ</div>'
        match = re.search(pattern, content)
        if match:
            print(f"Found match: {match.group(0)}")
            content = content.replace(match.group(0), new_part)
            print("Replaced using regex.")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
