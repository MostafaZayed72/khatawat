Add-Type -AssemblyName System.Drawing
 = "C:\Users\Mostafa\.gemini\antigravity\brain\21c00a3d-6dfd-41df-ae53-8a22c6fc5cc4\uploaded_image_1765411779681.png"
 = "e:\projects\khatwat\public\level2\11\listen"

if (-not (Test-Path )) { New-Item -ItemType Directory -Path  -Force }

 = [System.Drawing.Image]::FromFile()
 = [int](.Width / 3)
 = .Height

# Function to Crop and Save
function Crop-Image {
    param (, )
     = New-Object System.Drawing.Rectangle , 0, , 
     = New-Object System.Drawing.Bitmap , 
     = [System.Drawing.Graphics]::FromImage()
    .DrawImage(, (New-Object System.Drawing.Rectangle 0, 0, , ), , [System.Drawing.GraphicsUnit]::Pixel)
    .Save("\", [System.Drawing.Imaging.ImageFormat]::Png)
    .Dispose()
    .Dispose()
}

# Image 1 (Right - Carrots)
Crop-Image ( * 2) "1_large.png"

# Image 2 (Middle - Camels)
Crop-Image  "2_large.png"

# Image 3 (Left - Soldiers)
Crop-Image 0 "3_large.png"

.Dispose()
Write-Host "Cropping completed."
