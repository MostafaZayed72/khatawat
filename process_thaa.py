
from PIL import Image
import os

# Source Images
base_path = r"C:\Users\Mostafa\.gemini\antigravity\brain\f0b6b6e3-c01d-4ca2-a8a7-973cef0d44ea"
img_words_strip = os.path.join(base_path, "uploaded_image_0_1765406975817.png") # Words: Thubaan, Thiyab, Thawr
img_letters_strip = os.path.join(base_path, "uploaded_image_1_1765406975817.png") # Letters: Thu, Thi, Tha
img_remember_assemble = os.path.join(base_path, "uploaded_image_2_1765406975817.png") # Data reference (no process needed usually, unless we want to extract parts)
img_write_letters = os.path.join(base_path, "uploaded_image_3_1765406975817.png") # Writing Letters
img_write_words = os.path.join(base_path, "uploaded_image_4_1765406975817.png") # Writing Words

# Dest Path
dest_base = r"e:\projects\khatwat\public\level2\8"
os.makedirs(dest_base, exist_ok=True)

def slice_horizontal_save(src, dest_folder, names):
    try:
        os.makedirs(dest_folder, exist_ok=True)
        img = Image.open(src)
        width, height = img.size
        count = len(names)
        step = width // count
        for i, name in enumerate(names):
            # RTL: Rightmost is first (index 0)
            left = width - (step * (i + 1))
            right = width - (step * i)
            if i == count - 1: left = 0 # Catch all remainder
            
            box = (left, 0, right, height)
            slice_img = img.crop(box)
            save_path = os.path.join(dest_folder, name)
            slice_img.save(save_path)
            print(f"Saved {save_path}")
    except Exception as e:
        print(f"Error slicing {src}: {e}")

# 1. Process Words Strip (Image 0) -> Listen/Read images
# Words in strip (RTL usually): Right=Thawr, Middle=Thiyab, Left=Thubaan?
# Let's Verify order visually from user upload:
# Image 0: Left=Thubaan, Middle=Thiyab, Right=Thawr.
# So List: [Thawr, Thiyab, Thubaan] correspond to Items 1, 2, 3?
# Usually Lesson items are Fatha, Kasra, Damma order.
# Thawr (Fatha), Thiyab (Kasra), Thubaan (Damma).
# So:
# Item 1 (Fatha/Thawr): Right slice
# Item 2 (Kasra/Thiyab): Middle slice
# Item 3 (Damma/Thubaan): Left slice
listen_names = ["3.png", "2.png", "1.png"] # Wait, if slice 0 is Right (Thawr/Fatha), that should be item 3??
# Let's stick to: Slice 0 (Right) = Item 3 (Thawr)? No.
# Standard: Item 1 = Fatha, Item 2 = Kasra, Item 3 = Damma.
# Thawr = Fatha -> Item 3
# Thiyab = Kasra -> Item 2
# Thubaan = Damma -> Item 1
# WAIT. Let's check Taa.
# Taa items: Berries(Tu), Figs(Ti), Dates(Ta).
# Order in `level2.ts`: id 1: Berries(Tu), id 2: Figs(Ti), id 3: Dates(Ta).
# So order is Damma, Kasra, Fatha?
# Let's check Baa.
# Baa items: Duck(Ba), Watermelon(Bi? No Battiikh), Tower(Burj).
# Order in `level2.ts`: Duck(1), Watermelon(2), Tower(3).
# Duck: Ba (Fatha). Watermelon: Ba (Fatha? No wait). Tower: Bu (Damma).
# Let's check Alif.
# Lion(A), Ear(U - Damma), Needle(I - Kasra).
# Order seems varied.
# Let's just Map:
# Right Slice (Thawr - Fatha) -> 1.png
# Middle Slice (Thiyab - Kasra) -> 2.png
# Left Slice (Thubaan - Damma) -> 3.png
# I will use these names and map them in TS later.

slice_horizontal_save(img_words_strip, os.path.join(dest_base, "listen"), ["3.png", "2.png", "1.png"]) # Right(Thawr)->3, Mid->2, Left(Thubaan)->1 ? 
# Let's assume Right is 1.png for simpler logic, then I map in TS.
# slice_horizontal_save function iterates 0..count.
# i=0 (Rightmost). Name=names[0].
# So if I pass ["thawr.png", "thiyab.png", "thubaan.png"]
# Right=Thawr, Middle=Thiyab, Left=Thubaan.
# Saved as thawr.png, thiyab.png, thubaan.png.
names_ordered = ["1.png", "2.png", "3.png"] # 1=Thawr, 2=Thiyab, 3=Thubaan
slice_horizontal_save(img_words_strip, os.path.join(dest_base, "listen"), names_ordered)

# Copy listen to read (or just slice again)
slice_horizontal_save(img_words_strip, os.path.join(dest_base, "read"), names_ordered)

# 2. Process Write Images
# Image 3 -> Writing Letters (write_1.png)
try:
    img = Image.open(img_write_letters)
    img.save(os.path.join(dest_base, "write_1.png"))
    print("Saved write_1.png")
except Exception as e: print(e)

# Image 4 -> Writing Words (write_2.png)
try:
    img = Image.open(img_write_words)
    img.save(os.path.join(dest_base, "write_2.png"))
    print("Saved write_2.png")
except Exception as e: print(e)

