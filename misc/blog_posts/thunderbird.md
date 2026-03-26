# Thunderbird

Thunderbird doesn't support a tray mode. To solve this install:
```bash
yay -S birdtray
```
To circumvent it not working on a wayland only desktop edit the desktop application to launch

```
GDK_BACKEND=x11 thunderbird
XDG_SESSION_TYPE=x11 birdtray
```
This forces both application to use x11 which has no issues.