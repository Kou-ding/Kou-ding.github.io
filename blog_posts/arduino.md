## Arduino

For the boards that expose a UART over USB, it is necessary to allow read/write access to the serial port to users. To get the arduino ide to recognize usb devices you have to:

```bash
# Create a new rule by creating this file
sudo nano /etc/udev/rules.d/01-ttyusb.rules
```
Enter the following text in it:
```
SUBSYSTEMS=="usb-serial", TAG+="uaccess"
```
```bash
# Reload the udev rules
udevadm control --reload
# Trigger your rules
udevadm trigger
```