# Package managers

### Pacman Cheatsheet 
```bash
# Updates the packages installed form the official arch repositories
sudo pacman -Syu # -Sy: syncronize, -u: upgrade

# Useful commands
sudo pacman -Ss package_name # -Ss: Sync search, search for a package in the repositories
sudo pacman -Si package_name # -Si: Show info, display inforamtion about a package

sudo pacman -R package_name # -R: Remove
sudo pacman -Rs package_name # -Rs: Remove sweep, remove a package and its dependencies

sudo pacman -Q # -Q: Query, lists all the packages installed in the system
sudo pacman -Qm # See all the AUR packages
sudo pacman -Q package_name # -Q: Query, checks if a program is installed in the system

sudo pacman -Sc # -Sc: Sync clean, clears the old package cache keeping only the recent versions
sudo pacman -Scc # -Scc: Sync clean clean, clears the entire package cache
sudo pacman -Rns # -Rns: Remove nodependencies sweep, removes dependencies that are not used by any program
```

### AUR helper yay
AUR (Arch User Repository) expands the official arch repository. To access AUR we need a helper such as yay. 
Installing it is as easy as typing:
```bash 
# yay installation
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# Useful commands
# Install applications from the AUR
yay -S pipes.sh # -S: syncronize and install

# Updates the packages from the official repositories as well as the AUR repositories
yay -Syu

# and others... The flags are the same as pacman's. Refer to the above pacman cheatsheet.
```