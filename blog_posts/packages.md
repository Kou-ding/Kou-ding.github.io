# Packages

### Repositories
To include or exclude any repositories you need to uncomment or comment the related lines
inside the pacman configuration file.
```bash
# pacman configuration file location 
sudo nano /etc/pacman.conf
```
For example for multilib you have to uncomment these two lines. 
```bash
#[multilib]
#Include = /etc/pacman.d/mirrorlist
```
Finally perform an upgrade:
```bash
sudo pacman -Syu
```

### Mirrors List
If a package doesn't exist when trying to download it, it could be a mirror issue. The fix is to update the 
mirrors list adding new ways of acquiring that package.
```bash
# edit the mirrorlist file
sudo nano /etc/pacman.d/mirrorlist
# do a system update to utilize the new mirrors
sudo pacman -Syu
```
Ranking mirrors:
```bash
# Make a backup of the mirror list (If you have the full list)
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup

# If you don't have the full list download the mirror list of your choice
firefox https://archlinux.org/mirrorlist/

# Copy and paste it inside a mirror list backup
nano /etc/pacman.d/mirrorlist.backup

# Uncomment every mirror list entry
sudo sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist.backup

# Rank them based on speed
sudo rankmirrors -n 6 /etc/pacman.d/mirrorlist.backup > ~/test.txt

# Check the test.txt and if everything ok update the original mirror list
sudo ~/test.txt > /etc/pacman.d/mirrorlist

# Force pacman to refresh all package lists even if they are considered to be up to date
pacman -Syyu
```