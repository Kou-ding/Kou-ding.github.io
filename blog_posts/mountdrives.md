# Drive mounting

### Auto mounting drives at startup
```bash
# Find your drive's UUID, type and label
sudo blkid

# Make a directory to mount the drive to
sudo mkdir -p /media
sudo mkdir -p /media/drive_label

# Make the drive entry inside the fstab file which mounts the system's partitions at startup 
nvim /etc/fstab

# Add this line at the bottom of the fstab file
UUID=your-uuid-here  /media/drive_label your-drive-type-here  defaults,uid=yourusername,gid=yourusername,umask=0022  0  2
```
Parameter explanation
- defaults: Includes the standard mount options (rw, suid, dev, exec, auto, nouser, async).
- uid=yourusername: Sets the user ID for the mounted drive to your username, giving you ownership.
- gid=yourusername: Sets the group ID for the mounted drive to your username's group.
- umask=0022: Sets permissions on the files and directories within. 0022 gives rwxr-xr-x permissions, allowing you to have full access and others to have read access.

Setting the permissions this way negates the problem of having to enter your password every time you want to make changes to the drive.
This includes simple stuff as moving, copying, deleting files and creating new folders.