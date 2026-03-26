# PDF tools

## PDF decryption

This is a very handy tool for pdf file decryption, allowing pdfs to be viewed without the need of the password.
```bash
# Install 
sudo pacman -S qpdf

# Command
qpdf --password=[owner_password] --decrypt input.pdf output.pdf
```


## PDF merging

```bash
magick part1.pdf part2.pdf merged.pdf
# or a higher quality option is:
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=output.pdf file1.pdf file2.pdf
```

Alternative method: Libre Office Draw.

## PDF compression

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.7 -dPDFSETTINGS=/ebook \
-dNOPAUSE -dQUIET -dBATCH -sOutputFile=output_compressed.pdf output.pdf
```