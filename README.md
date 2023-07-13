# After-Diffusion

A CEP Extension for Adobe After Effects that allows for seamless integration of the Stable Diffusion Web-UI. Compatible with AE versions CC 2019 and up.

## Table of Contents
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Known Issues/Bugs](#known-issuesbugs)
- [License](#license)
- [Resources and Thanks](#resources-and-thanks)
- [Tested System Specifications](#tested-system-specifications)
- [Change Log](#change-log)

## Key Features
  - Seamless Integration: The UI blends into After Effects, providing a native look and feel.
  - Key-frameable Parameters: The Pseudo Effect supports key-framing of parameters, allowing you to key-frame anything from CFG Scale to Controlnet Model.
  - Background Output: Changes applied through the effect are automatically outputted to the layer in the background.
  - Direct Generation: Generate images from webUI directly in After Effects without having to swap windows.
    >  Use Txt2Img, Img2Img + Inpaint, Inpaint Sketch, Multi-Controlnet, and more!
  - Direct Control: Control your Diffusion Models directly from After Effects!
  - Tiled VAE, Grid Editor, Control Image, and Live Previews!
  - Please see the [Wiki](https://github.com/Trentonom0r3/After-Diffusion/wiki) for more info!

## Installation

#### CEP Installation
1. Download the `CEP` folder.
2. Place the `CEP` folder into the following directory: `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`.
3. Open Adobe After Effects and access the extension. 
4. Make sure you give scripts full permissions in AE preferences.

#### ZXP Installation
1. Download the ZXP file from `ZXP` folder.
2. Install the ZXP file using [ZXPInstaller](https://aescripts.com/learn/zxp-installer/).
3. Make sure you give scripts full permissions in AE preferences.

#### .aex Plugin Installation
1. Download the `.aex` plugin file.
2. Copy the `.aex` file into the After Effects effects folder, which is commonly found at:
   `C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\Plug-ins\Effects`.

### Python Requirements
To install the required packages, you have two options:

#### Option 1: Running the Extension
- You can run the extension, which should automatically install the necessary dependencies for you.

#### Option 2: Manual Installation
- Alternatively, you can manually install the required packages using the following pip command:

    ```
    pip install requests flask
    ```
#### Automatic1111
- Make sure you've added "--api" as an argument to your webui-user.bat file!

#### UI Positioning.
= The Following is a short video demonstrating how and where I set my extension up within the main UI.

https://github.com/Trentonom0r3/After-Diffusion/assets/130304830/f31273ac-f744-4629-b7f1-74fcb379cb17


## Usage
> Make sure your SD webUI has been started and is fully loaded, ready to go.

> To use the After-Diffusion CEP extension and Pseudo Effect, follow these steps:
1. Open your project in After Effects and make the desired modifications.
2. Rename the layer you want to work with to a simple name like "layer," "comp," or "video" without any extra numbers or symbols.
3. Save the project.
4. Apply the AESD effect from `Effects > Generate > AESD`, or simply search for 'AESD'.
5. If you want to work with a specific region of the main comp, draw a mask on the layer you've applied the effect to, and your generation will automatically be placed into that area.
6. Adjust the settings in the effect panel, including keyframing them if necessary.
7. Click the "Generate" button to initiate the generation process. The generated images will be returned to your project.

## Known Issues/Bugs
- Sometimes, the image may appear non-existent even if it should be there. To resolve this, change a parameter in the effect, which should fix the issue.
- If the user adds new effects after the AESD effect, the AESD effect output will not reflect the new effects. To fix this, move the AESD effect below all other effects.
- If the images aren't updating properly, start from time 0, press the space bar, and let After Effects RAM render, which will force the images to update.
- Scripts do not have parameters yet. May have unpredictible results if used.

## Tested System Specifications
- Keep in mind, this is only what my laptop has, restrictions will be based primarily on webUI, and After Effects itself. 
- **Processor:**
  - Processor: 12th Gen Intel(R) Core(TM) i7-12700H
  - Number of Cores: 20
  - Speed: 4.6 GHz

- **Memory:**
  - RAM: 16 GB DDR5

- **Video Card:**
  - NVIDIA GeForce RTX 3060 Laptop GPU, 6GB vRAM

## Change Log

## 7.13.23 [MAJOR UPDATE]
   - Added New Panel, 'Grid Editor'
     - Create Grids from your Frames Directly in AE, send to layers! Click the 'Folder' Button to access this.
   - Added Live Preview. When Generating, you'll get a preview of the images being generated.
   - Added Support for Controlnet Control Image. Set this in the C++ effect. Set to 'None' if you want to use the Input layer in img2img.
       - Control Image also works for TXT2IMG.
   - Added Tiled VAE options to c++ effect, CEP now reflects this information-- you can use Tiled VAE in After Diffusion now!
   - Started to Update [Wiki](https://github.com/Trentonom0r3/After-Diffusion/wiki)  with videos and more info.

### 7.5.23
   - Fixed IMG2IMG Inpaint, now working properly.
   - In all cases other than TXT2IMG, set 'Input' to the layer you want to generate for, and set 'Input' to either source, or masks.
    ( You can use effects+masks as long as you don't have rotoscope applied)
   Then, set the mask control to the same layer, and set it to effects and masks.
   BOTH layer controls must be set, or your images will not be output.

   - Draw a mask on the layer you have the effect applied to, and work with smaller areas more easily! 
    - (This assumes the selection mask is rectangular)
   - Resize Mode Options now working properly. (Useful when you want to use a lower quality input.)
     - Creates images based on the viewer quality you have set.
      - If image is 1920x1080 and quality is 50%, the image is saved at 960x540, and sent to SD at the layer size, default is simple resize.
      - If a Mask is used, SD is sent to generate an image the size of the mask, and it is then place back into the comp at the same position.
   - Added low Vram option to controlnet.
   - Added mask blur slider to mask options.
   - Started on Script Args. Visibile in c++ effect, but they don't affect generation, nor are they dynamically set up yet.

### 6.25.23 
   - Inpaint Sketch Support
   - Layer Control Support
   - CEP UI Live Progress Bar
   - Dynamic C++ Parameters

#### 6.12.23
   - Initial Release of After Diffusion v2.0. Full UI overhaul, custom c++ effect, and more!
#### 5.25.23
   - Created a basic [Discord Server](https://discord.gg/EbsH6ZHd) for people to join. It'll make things a bit easier for finding issues/providing updates and tutorials. I don't expect a ton of traffic, but it's there if you're interested! 
   
#### 5.22.23
   - Fixed issue on ZXP install, added ZXP option back to the repository.
   - Removed PIX2PIX button, added 'img2img alternative test' switch.

## License
The software is licensed under the [AGPL-3.0 license](https://github.com/Trentonom0r3/After-Diffusion/blob/main/LICENSE).

## Resources and Thanks
- GPT 4.0 for helping write most of this
- [AbdullahAlfaraj](https://github.com/AbdullahAlfaraj), and his work on the [Auto Photoshop SD Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [HyperBrew Bolt-CEP](https://github.com/hyperbrew/bolt-cep)
- [aulerius](https://github.com/aulerius): You've been INCREDIBLY helpful during my development process, and I can't tell you how much I appreciate it. 

![Built_With_BOLT_CEP_Logo_White_V01](https://github.com/Trentonom0r3/After-Diffusion/assets/130304830/53b7e99f-83d0-43e1-8082-59f7accde12b)
