Add-Type -AssemblyName System.Drawing
 = "e:\projects\khatwat\temp_jeem_strip.png"
 = "e:\projects\khatwat\public\level2\11\listen"

try {
     = [System.Drawing.Image]::FromFile()
    Write-Host "Image loaded: x"
    
     = [int](.Width / 3)
     = .Height
    Write-Host "Part width: "

    # Crop Left (Soldiers) - Index 0
     = New-Object System.Drawing.Rectangle 0, 0, , 
     = New-Object System.Drawing.Bitmap , 
     = [System.Drawing.Graphics]::FromImage()
    .DrawImage(, (New-Object System.Drawing.Rectangle 0, 0, , ), , [System.Drawing.GraphicsUnit]::Pixel)
    
     = "\3_large.png"
    .Save(, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved "
    
    .Dispose()
    .Dispose()
    .Dispose()
} catch {
    Write-Error .Exception.Message
}
