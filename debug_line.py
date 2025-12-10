
path = r"e:\projects\khatwat\app\pages\part\[partId]\lesson\[lessonId].vue"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if "<!-- Section 3: I Write -->" in line:
            print(f"Line {i+1}: {repr(line)}")
