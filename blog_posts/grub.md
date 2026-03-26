# Grub

### Dual boot windows
```bash
# Edit grub file
nano /etc/default/grub
# Generate configuration based on grub file
grub-mkconfig -o /boot/grub/grub.cfg
# For dual boot uncomment this line:
GRUB_DISABLE_OS_PROBER=false
```

### Use splash screen
Use Plymouth to configure the splash screen if you include that option in your grub file.\\
Arch wiki links:
- [Plymouth](https://wiki.archlinux.org/title/Plymouth)
- [Grub](https://wiki.archlinux.org/title/GRUB#Generated_grub.cfg)

For Plymouth:
```bash
# Install plymouth
sudo pacman -S plymouth 
# List all available themes
plymouth-set-default-theme -l
# Enable example theme 
plymouth-set-default-theme bgrt
# Include it in the mkinitcpio
sudo nano /etc/mkinitcpio.conf
# HOOKS=(... plymouth ...)
```