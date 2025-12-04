# PDF Files for Levels

This directory contains PDF files for each level of the Khatwat program.

## Required Files

Please add the following PDF files to this directory:

1. `level1.pdf` - PDF for Level 1 (Part One)
2. `level2.pdf` - PDF for Level 2 (Part Two)
3. `level3.pdf` - PDF for Level 3 (Part Three)
4. `level4.pdf` - PDF for Level 4 (Part Four)

## Security Features

The PDF viewer has been configured with the following security features:

- **View-only mode**: Users can only view the PDF, not download it
- **Right-click disabled**: Context menu is disabled on PDF content
- **Text selection disabled**: Users cannot select or copy text from the PDF
- **Page navigation**: Users can navigate between pages
- **Zoom controls**: Users can zoom in and out for better viewing

## How to Add PDF Files

1. Place your PDF files in this directory (`public/pdfs/`)
2. Name them exactly as specified above (level1.pdf, level2.pdf, etc.)
3. The PDF viewer will automatically load them when users click the "View PDF" button on each level page

## Notes

- PDF files should be optimized for web viewing
- **Large files supported**: The viewer can handle PDF files up to 90MB
- **Progress indicator**: A loading progress bar will show for large files
- Recommended file size: Less than 100MB per file for best performance
- Supported format: PDF only
- The viewer includes automatic retry functionality if loading fails
