
from PIL import Image
import os

# Source Images (from metadata)
base_path = r"C:\Users\Mostafa\.gemini\antigravity\brain\f0b6b6e3-c01d-4ca2-a8a7-973cef0d44ea"
image_0 = os.path.join(base_path, "uploaded_image_0_1765365327713.png") # Listen Words
image_1 = os.path.join(base_path, "uploaded_image_1_1765365327713.png") # Read Letters
image_2 = os.path.join(base_path, "uploaded_image_2_1765365327713.png") # Writing Rows
image_3 = os.path.join(base_path, "uploaded_image_3_1765365327713.png") # Full Writing

# Destination Paths
dest_base = r"e:\projects\khatwat\public\level2\7"

def slice_horizontal(image_path, dest_folder, count=3):
    try:
        img = Image.open(image_path)
        width, height = img.size
        step = width // count
        for i in range(count):
            # RTL: image 1 is the rightmost slice
            left = width - (step * (i + 1))
            right = width - (step * i)
            # Adjust for last slice to catch rounding pixels
            if i == count - 1:
                left = 0
            
            box = (left, 0, right, height)
            slice_img = img.crop(box)
            slice_img.save(os.path.join(dest_folder, f"{i+1}.png"))
            print(f"Saved {dest_folder}/{i+1}.png")
    except Exception as e:
        print(f"Error slicing {image_path}: {e}")

def slice_vertical(image_path, dest_folder, count=3):
    try:
        img = Image.open(image_path)
        width, height = img.size
        step = height // count
        for i in range(count):
            # Top to Bottom? Usually writing practice goes 1, 2, 3
            top = step * i
            bottom = step * (i + 1)
             # Adjust for last slice
            if i == count - 1:
                bottom = height

            box = (0, top, width, bottom)
            slice_img = img.crop(box)
            slice_img.save(os.path.join(dest_folder, f"{i+1}.png"))
            print(f"Saved {dest_folder}/{i+1}.png")
    except Exception as e:
        print(f"Error slicing {image_path}: {e}")

# Process Image 0 (Listen/Read Words)
listen_dir = os.path.join(dest_base, "listen")
os.makedirs(listen_dir, exist_ok=True)
slice_horizontal(image_0, listen_dir, 3)

# Process Image 1 (Letters) -> Read Items
read_dir = os.path.join(dest_base, "read")
os.makedirs(read_dir, exist_ok=True)
slice_horizontal(image_1, read_dir, 3)

# Process Image 2 (Writing Rows) -> Writing Practice
write_dir = os.path.join(dest_base, "write")
os.makedirs(write_dir, exist_ok=True)
slice_vertical(image_2, write_dir, 3)

# Process Image 3 (Full Writing) -> Writing Full
try:
    os.makedirs(dest_base, exist_ok=True)
    img = Image.open(image_3)
    img.save(os.path.join(dest_base, "write_full.png"))
    print("Saved write_full.png")
except Exception as e:
    print(f"Error saving full write image: {e}")
