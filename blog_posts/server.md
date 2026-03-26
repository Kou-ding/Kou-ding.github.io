# Server
This tutorial applies to raspberry pi servers but it can also apply to servers running debian and ubuntu.
## Localhost server - Home Network
### Basics
Connect to the server:
```bash
ssh username@hostname
```

Connect to the server without a password:
```bash
# Copy your public key to the server
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@hostname 
```

### NextCloud
1. Necessary server dependencies:
```bash
sudo apt install apache2 mariadb-server libapache2-mod-php
sudo apt install php-gd php-json php-mysql php-curl php-mbstring php-intl php-imagick php-xml php-zip
```

2. Restart Apache2 server:
```bash
sudo service apache2 restart
```

3. Navigate to the Apache Web folder
```bash
cd /var/www/html
```

4. Download NextCloud and set privileges

```bash
sudo wget https://download.nextcloud.com/server/releases/latest.zip
# Extract the file with unzip:
sudo unzip latest.zip
# As we used the root user to extract files, we need to change folder permissions to allow Apache to access it:
sudo chmod 750 nextcloud -R
sudo chown www-data:www-data nextcloud -R
```

5. Mariadb setup (replace 'password' with a strong password)
```bash
sudo apt install mariadb-server

sudo mysql

CREATE USER 'nextcloud' IDENTIFIED BY 'password';

CREATE DATABASE nextcloud;

GRANT ALL PRIVILEGES ON nextcloud.* TO 'nextcloud'@localhost IDENTIFIED BY 'password';

FLUSH PRIVILEGES;
quit
```

6. NextCloud Installation script
You can download NextCloud either from a gui:
```bash
# Browse
http://IP/nextcloud
```
Or through the commandline:
```bash
sudo -E -u www-data php occ maintenance:install \
    --database "mysql" \
    --database-name "nextcloud" \
    --database-user "nextcloud" \
    --database-pass "dbpw" \
    --admin-user "username" \
    --admin-pass "pw" \
    --data-dir "/var/www/html/nextcloud/data"
```
If it doesn't work try the following while inside the NextCloud folder:
```bash
sudo -u www-data php ./occ maintenance:install \
    --database "mysql" \
    --database-name "nextcloud" \
    --database-user "nextcloud" \
    --database-pass "dbpw" \
    --admin-user "username" \
    --admin-pass "pw" \
    --data-dir "/var/www/html/nextcloud/data"
```
Update the trusted domains array:
```
'trusted_domains' => 
  array (
    0 => 'localhost',
    1 => 'IP',
    2 => 'nextcloud.local',
    3 => 'hostname',
    4 => 'username@hostname',
  ),
```
,where id(array[1]), hostname(array[3]) and username(array[3], array[4]) refer to the server.

### Credentials
Login via the server's username and password.

## Connect from outside the Home Network

### Creating a dynamic dns
Dynamic dns allows your server to be found everytime even in case its ip changes.
1. Go to [DuckDNS](https://www.duckdns.org)
2. Login and create a domain
3. Go to the install page and follow the 'linux cron' method

### Forwarding a port
Port forward the 51820 port through your router menu using the udp protocol.
- ingoing port: 51820
- outgoing port: 51820
- ingoing protocol: UDP
- outgoing protocol: UDP

### Installing PiVPN - Wireguard on the server
Go through the PiVPN installation process
```bash 
curl -L https://install.pivpn.io | bash
```
Be sure to select:
1. WireGueard (for VPN)
2. 51820 (Wireguard port)
3. CloudFlare DNS
4. Use a public DNS entry (input the address you created using DuckDNS)

Reboot the system and when it boots back up 
```bash
pivpn add
```
Finally generate a qr to connect via wireguard to your newly created server :)
```bash
pivpn -qr
```

### Maintenance
When we need to perform some kind of maintenance to our nextcloud server we first need to put in in maintenance mode:
```bash
sudo -u www-data php /var/www/html/nextcloud/occ maintenance:mode --on
```
Now let's say we want to migrate to a bigger drive.

(Optional) Make a quick backup of the data directory. Its the directory your files are stored in.
```bash
cp -a /var/www/html/nextcloud/data/. ~/data-backup
```
Mount your new storage unit.

Give the correct permissions to the new data directory
```bash
sudo chown -R www-data:www-data /media/passport/data/
```

Change the datadirectory from inside the nextcloud configuration to the one we created.

(Optional) Make a database backup
```bash
sudo mysqldump nextcloud > dump.sql
```

Update the database entry regarding the storage location
```sql
use nextcloud;

update oc_storages set id='local::/media/passport/data/' where id='local::/var/www/html/nextcloud/data/';
```

Turn off maintenance mode and enjoy the additional storage
```bash
sudo -u www-data php /var/www/html/nextcloud/occ maintenance:mode --off
```