
path = r"e:\projects\khatwat\app\pages\part\[partId]\lesson\[lessonId].vue"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    # Print lines around 360-370. Python list is 0-indexed.
    start_index = 359 # Line 360
    end_index = 370   # Line 371
    for i in range(start_index, end_index):
        print(f"Line {i+1}: {repr(lines[i])}")
