# WIFI

### Network
```bash
# Network adapter: Asus USB-AC58 
yay -S rtl88x2bu-dkms-git 
# Load kernel module
sudo modprobe 88x2bu
# After an update, if wifi stops working, rebuild and install the module
sudo dkms autoinstall # dkms: dynamic kernel module support
```


If errors occur pinpoint the cause seeing the error messages:
```bash
sudo dmesg
```
If the module failed to load try again:
```bash
# modprobe -r removes (unloads) the mt7921e kernel module
# modprobe loads the mt7921e kernel module again
sudo modprobe -r mt7921e && sudo modprobe mt7921e

```