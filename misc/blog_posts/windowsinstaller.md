For that one time you really need windows:
```bash 
# Install bootable media software
yay -S woeusb

# How to use:
sudo woeusb --device <path/to/Windows/ISO> <name/of/the/USB/device> --target-filesystem ntfs

# Example
sudo woeusb --device /home/user/Downloads/Win11.iso /dev/sdb --target-filesystem ntfs
```