### Necessary dependencies
According to the official archinstall script the basic must-have dependencies are the following
- hyprland: The tiling window manager itself
- kitty: The default hyprland terminal
- dolphin: The default hyprland file manager
- dunst: A notification manager
- grim: 
- wofi: 
- slurp:
- xdg-desktop-portal-hyprland:
- qt5-wayland:
- qt6-wayland:
- polkit-kde-agent:

Installation:
```bash
sudo pacman -S hyprland kitty dunst grim slurp wofi xdg-desktop-portal-hyprland polkit-kde-agent qt5-wayland qt6-wayland dolphin
```

### Hyprland dotfiles
These are some quality of life changes on the original hyprland config file:
- [ ] To be implemented...

### Polybar or wofi dotfiles
- [ ] To be implemented...

### Customization
yay packages:
```
["pipes.sh"]="Animated pipes terminal screensaver"
["cava"]="Audio visualizer for the terminal"
["cbonsai"]="Cute bonsai tree generator"
["orchis-kde-theme"]="GTK and icon theme"
```
pacman packages:
```
["cmatrix"]="Matrix-like terminal display"
["papirus-icon-theme"]="Papirus icon theme"
["ttf-jetbrains-mono-nerd"]="JetBrains Mono font"
["neovim"]="Text editor"
["figlet"]="Text-to-ASCII banner"
```