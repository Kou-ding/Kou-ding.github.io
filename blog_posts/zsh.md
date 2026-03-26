# zsh
Install zsh
```bash
sudo pacman -S zsh
```

Replace the default zsh config file with the [ohmyzsh](https://ohmyz.sh/):
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
Clone the theme we are going to use for ohmyzsh [(PowerLevel10k)](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#oh-my-zsh):

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```
> if the clone command doesnt work go and find it manually by navigating the Powerlevel10k github Gettiong Started -> Install Powerlevel10k itself -> Oh My Zsh -> Clone the repository.

Replace the theme name in the .zshrc with:
```
ZSH_THEME="powerlevel10k/powerlevel10k"
```
Finally launch the zshell and go through the theme wizard to customize your experience:
```bash
exec zsh
```

You also need to install the following:
```bash
# Font
sudo pacman -S ttf-jetbrains-mono
```

To make it your default shell you can just set *shell /bin/zsh* inside your kitty config file.