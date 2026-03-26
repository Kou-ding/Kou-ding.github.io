# sway window manager
sway and i3 have compatible config files but have different program dependencies that either work on X11(i3) or Wayland(sway).
```bash
# i3 dependencies
sudo pacman -S i3-wm i3blocks i3lock i3status

# sway dependencies
sudo pacman -S sway swaybg swaylock swayidle waybar kitty brightnessctl slurp polkit pavucontrol iwd grim foot vim nano smartmontools wget wireless_tools wmenu rofi wpa_supplicant xdg-utils xorg-xwayland ttf-noto-nerd ttf-font-awesome
```

### Dependency Table 
| Package         | Purpose                                 |
| --------------- | --------------------------------------- |
| sway            | window manager                          |
| swaybg          | backgrounds for sway                    |
| swaylock        | screen locker for sway                  |
| swayidle        | idle management for sway                |
| waybar          | status bar for Wayland                  |
| kitty           | GPU-based terminal emulator             |
| brightnessctl   | control screen brightness               |
| slurp           | select region for screenshots           |
| polkit          | privilege management                    |
| pavucontrol     | PulseAudio volume control               |
| iwd             | wireless daemon                         |
| grim            | screenshot utility for Wayland          |
| foot            | Wayland terminal emulator               |
| vim             | text editor                             |
| nano            | text editor                             |
| smartmontools   | disk monitoring tools                   |
| wget            | network downloader                      |
| wireless_tools  | legacy wireless utilities               |
| wmenu           | simple menu for Wayland                 |
| rofi            | application launcher                    |
| wpa_supplicant  | Wi-Fi authentication                    |
| xdg-utils       | desktop integration utilities           |
| xorg-xwayland   | X11 compatibility layer for Wayland     |
| ttf-noto-nerd   | icon fonts                              |
| ttf-font-awesome| icon fonts                              |