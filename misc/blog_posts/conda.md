# Conda

Conda is a package, dependency and environment management software commonly used for creating reproducible python code.

## Installation
```bash
yay -S miniconda3
```
Afterwards append the necessary text at the end of .bashrc using the following command:
```bash
echo "export CRYPTOGRAPHY_OPENSSL_NO_LEGACY=1
[ -f /opt/miniconda3/etc/profile.d/conda.sh ] && source /opt/miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc
```

## Commands:
```bash
# Create a new conda environment
conda create --name myenv python=3.8.0

# Activate the new environment
conda activate myenv

# Install a package in the active environment
conda install numpy

# List all conda environments
conda env list

# Deactivate the current environment
conda deactivate

# Remove an environment
conda env remove --name myenv

# Create snapshot
conda env export > environment.yml

# Recover conda state from snapshot
conda env create -f environment.yml
```