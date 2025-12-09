from PIL import Image
import os

files = [
    'C:/Users/Mostafa/.gemini/antigravity/brain/ae34bf4a-fe87-4f73-8a51-61e1bf247aa9/uploaded_image_0_1765288807662.png',
    'C:/Users/Mostafa/.gemini/antigravity/brain/ae34bf4a-fe87-4f73-8a51-61e1bf247aa9/uploaded_image_1_1765288807662.png',
    'C:/Users/Mostafa/.gemini/antigravity/brain/ae34bf4a-fe87-4f73-8a51-61e1bf247aa9/uploaded_image_2_1765288807662.png'
]

dest_dirs = [
    'public/level2/5/listen/',
    'public/level2/5/read/',
    'public/level2/5/write/'
]

for d in dest_dirs:
    os.makedirs(d, exist_ok=True)

# Order is a guess, can be swapped later.
# Assuming:
# 0 -> Listen (Words images)
# 1 -> Read (Letters)
# 2 -> Write (Tracing)
# Or maybe the user uploaded them in order Listen, Read, Write.

for i, fpath in enumerate(files):
    if i >= len(dest_dirs): break
    
    try:
        img = Image.open(fpath)
        w, h = img.size
        
        # We need 3 parts.
        # RTL Language: 
        # Item 1 (Right): [2/3w : w]
        # Item 2 (Middle): [1/3w : 2/3w]
        # Item 3 (Left): [0 : 1/3w]
        
        part_w = w // 3
        
        # Item 1
        crop1 = img.crop((part_w * 2, 0, w, h))
        crop1.save(os.path.join(dest_dirs[i], '1.png'))
        
        # Item 2
        crop2 = img.crop((part_w, 0, part_w * 2, h))
        crop2.save(os.path.join(dest_dirs[i], '2.png'))
        
        # Item 3
        crop3 = img.crop((0, 0, part_w, h))
        crop3.save(os.path.join(dest_dirs[i], '3.png'))
        
        print(f"Processed {fpath} to {dest_dirs[i]}")
        
    except Exception as e:
        print(f"Error processing {fpath}: {e}")
