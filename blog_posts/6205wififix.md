# 6205 wifi module fix 
On some distros this intel wifi module can be unstable. To achieve fluid operation modify the module's parameters.

### Noticing the problem 
It can look like:
```
[   19.785382] iwlwifi 0000:03:00.0: Microcode SW error detected.  Restarting 0x2000000.
[   19.785390] iwlwifi 0000:03:00.0: Loaded firmware version: 18.168.6.1 6000g2a-6.ucode
[   19.785740] iwlwifi 0000:03:00.0: Start IWL Error Log Dump:
[   19.785742] iwlwifi 0000:03:00.0: Status: 0x0000044C, count: 6
[   19.785745] iwlwifi 0000:03:00.0: 0x00001030 | ADVANCED_SYSASSERT          
[   19.785747] iwlwifi 0000:03:00.0: 0x0000C064 | uPc
[   19.785748] iwlwifi 0000:03:00.0: 0x0000C05C | branchlink1
[   19.785750] iwlwifi 0000:03:00.0: 0x0000C05C | branchlink2
[   19.785751] iwlwifi 0000:03:00.0: 0x0000D6BE | interruptlink1
[   19.785752] iwlwifi 0000:03:00.0: 0x00000000 | interruptlink2
[   19.785753] iwlwifi 0000:03:00.0: 0x0021008E | data1
[   19.785755] iwlwifi 0000:03:00.0: 0x00000000 | data2
[   19.785756] iwlwifi 0000:03:00.0: 0x00000800 | line
[   19.785757] iwlwifi 0000:03:00.0: 0x0A003361 | beacon time
[   19.785759] iwlwifi 0000:03:00.0: 0x687B1C9F | tsf low
[   19.785760] iwlwifi 0000:03:00.0: 0x0000002B | tsf hi
[   19.785761] iwlwifi 0000:03:00.0: 0x000005CB | time gp1
[   19.785762] iwlwifi 0000:03:00.0: 0x00425AA2 | time gp2
[   19.785764] iwlwifi 0000:03:00.0: 0x00000000 | time gp3
[   19.785765] iwlwifi 0000:03:00.0: 0x754312A8 | uCode version
[   19.785766] iwlwifi 0000:03:00.0: 0x000000B0 | hw version
[   19.785767] iwlwifi 0000:03:00.0: 0x00488700 | board version
[   19.785768] iwlwifi 0000:03:00.0: 0x000A001C | hcmd
[   19.785770] iwlwifi 0000:03:00.0: 0xA7863008 | isr0
[   19.785771] iwlwifi 0000:03:00.0: 0x0101C000 | isr1
[   19.785772] iwlwifi 0000:03:00.0: 0x00000E1F | isr2
[   19.785774] iwlwifi 0000:03:00.0: 0x0143FCC0 | isr3
[   19.785775] iwlwifi 0000:03:00.0: 0x00000000 | isr4
[   19.785776] iwlwifi 0000:03:00.0: 0x00010110 | isr_pref
[   19.785777] iwlwifi 0000:03:00.0: 0x00023098 | wait_event
[   19.785778] iwlwifi 0000:03:00.0: 0x00004288 | l2p_control
[   19.785779] iwlwifi 0000:03:00.0: 0x00000030 | l2p_duration
[   19.785780] iwlwifi 0000:03:00.0: 0x00000000 | l2p_mhvalid
[   19.785782] iwlwifi 0000:03:00.0: 0x001054F7 | l2p_addr_match
[   19.785783] iwlwifi 0000:03:00.0: 0x00000015 | lmpm_pmg_sel
[   19.785784] iwlwifi 0000:03:00.0: 0x06061222 | timestamp
[   19.785785] iwlwifi 0000:03:00.0: 0x00001830 | flow_handler
[   19.785958] iwlwifi 0000:03:00.0: Start IWL Event Log Dump: nothing in log
[   19.785977] iwlwifi 0000:03:00.0: Device error - SW reset
[   19.798328] ieee80211 phy0: Hardware restart was requested
[   19.810779] iwlwifi 0000:03:00.0: Radio type=0x1-0x2-0x0
[   20.103760] iwlwifi 0000:03:00.0: Radio type=0x1-0x2-0x0
```

To resolve this issue you can try disabling some problematic module features. 

Find the name of the wifi device:
```
iw dev
```

Disable 802.11n (Wi-Fi 4) and use hardware encryption
```
nmcli radio wifi off
sudo ip link set wlan0 down   # replace wlan0 with your interface name
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi 11n_disable=1 swcrypto=0
nmcli radio wifi on
```

To make the changes permanent:
```
echo "options iwlwifi 11n_disable=1 swcrypto=0" | sudo tee /etc/modprobe.d/iwlwifi.conf
```