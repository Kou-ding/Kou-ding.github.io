# Nano 

### Enable the mouse 
Add the following lines on the top of the .nanorc config file:
```bash
sudo nano /etc/nanorc
# Uncomment the following line
set mouse
```

### Enable syntax highlighting
For syntax highlighting install 
```bash
# Installation
sudo pacman -S nano-syntax-highlighting

# Navigate to the .nanorc 
sudo nano /etc/nanorc

# Append the following lines on the start of the file
## Syntax highlighting
include "/usr/share/nano/*.nanorc"
include "/usr/share/nano/extra/*.nanorc"
include "/usr/share/nano-syntax-highlighting/*.nanorc"
```