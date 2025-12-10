
path = r"e:\projects\khatwat\app\pages\part\[partId]\lesson\[lessonId].vue"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add relative to parent
old_parent = '<div class="bg-[#fff9c4] h-24 flex justify-center items-center border-b-[3px] border-[#ffcc80]">'
new_parent = '<div class="bg-[#fff9c4] h-24 flex justify-center items-center border-b-[3px] border-[#ffcc80] relative">'

if old_parent in content:
    content = content.replace(old_parent, new_parent)
    print("Replaced parent div.")
else:
    print("Could not find parent div.")

# 2. Fix Damma styling
old_damma = 'class="text-[220px] mt-32 font-black text-[#d50000] leading-none font-arabic">ُ</div>'
new_damma = 'class="text-[100px] font-black text-[#d50000] leading-none font-arabic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4">ُ</div>'

if old_damma in content:
    content = content.replace(old_damma, new_damma)
    print("Replaced Damma div.")
else:
    # Try lighter match if full string fails
    print("Could not find Damma div exact match. Attempting partial?")
    
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
