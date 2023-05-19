import importlib
import subprocess

def check_and_install(package):
    try:
        importlib.import_module(package)
        print(f"{package} is already installed")
    except ImportError:
        print(f"{package} is not installed. Installing now...")
        subprocess.check_call(["python", "-m", "pip", "install", package])
        print(f"{package} has been installed successfully")

required_packages = ['opencv-python', 'os', 'base64', 'json', 'requests', 'tempfile', 'time', 'flask']

for package in required_packages:
    check_and_install(package)
