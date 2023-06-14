# After-Diffusion

A CEP Extension for Adobe After Effects that allows for seamless integration of the Stable Diffusion Web-UI. Compatible with AE versions CC 2019 and up.


## Updates in After-Diffusion V2.0

- **UI Rework (Complete):**
  - New UI: The extension now features a new UI with 7 simple buttons for an improved user experience.
  - Seamless Integration: The UI blends into After Effects, providing a native look and feel.
  - Custom Override Settings: Users can personalize their experience using custom settings.
  - Settings Panel: Includes options to change the API URL for collaboration and --nowebui users.

- **Pseudo Effect (Complete):**
  - Key-frameable Parameters: The Pseudo Effect supports key-framing of parameters.
  - Background Output: Changes applied through the effect are automatically outputted to the layer in the background.
      - Controlnet Input Image in progress. You'll be able to key-frame this as well, which could be incredibly useful for temporal coherence when combined with other techniques.
- **Backend Rework (Complete)**

## Table of Contents
- [Change Log](#change-log)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Known Issues/Bugs](#known-issuesbugs)
- [License](#license)
- [Resources and Thanks](#resources-and-thanks)
- [Tested System Specifications](#tested-system-specifications)

## Change Log
#### 6.12.23
   - Initial Release of After Diffusion v2.0. Full UI overhaul, custom c++ effect, and more!
#### 5.25.23
   - Created a basic [Discord Server](https://discord.gg/EbsH6ZHd) for people to join. It'll make things a bit easier for finding issues/providing updates and tutorials. I don't expect a ton of traffic, but it's there if you're interested! 
   
#### 5.22.23
   - Fixed issue on ZXP install, added ZXP option back to the repository.
   - Removed PIX2PIX button, added 'img2img alternative test' switch.

## Key Features
- Work Directly with Videos: No need for PNG sequences anymore.
- ControlNet Support Added! Multi-ControlNet available, only limited by your webUI settings!
- Most of the work is done on the backend, allowing less work for AE and less work for you!
- Harness the power of After Effects features without bouncing back and forth between webUI, AE, and your system.
- Set webUI models and more directly from the extension.
- TXT2IMG and full IMG2IMG support, including inpaint, single image generation, and full video generation.
- Work with specific regions of a larger comp. Seamlessly reintegrate smaller sections back into the full-sized main comp.
- Less direct action in After Effects and more happening on the backend.
- Keeps AE responsive and leads to faster overall generation and integration times.
- New UI with 7 simple buttons for an improved user experience.

## Installation

### CEP Installation
1. Download the `CEP` folder.
2. Place the `CEP` folder into the following directory: `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`.
3. Open Adobe After Effects and access the extension. 
4. Make sure you give scripts full permissions in AE preferences.

### ZXP Installation
1. Download the ZXP file from [ZXP folder].
2. Install the ZXP file using [ZXPInstaller](https://aescripts.com/learn/zxp-installer/).
3. Make sure you give scripts full permissions in AE preferences.

### .aex Plugin Installation
1. Download the .aex plugin file from [repository].
2. Copy the .aex file into the After Effects effects folder, which is commonly found at:
   `C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\Plug-ins\Effects`.

## Usage
Make sure your SD webUI has been started and is fully loaded, ready to go.
To use the After-Diffusion CEP extension and Pseudo Effect, follow these steps:
1. Open your project in After Effects and make the desired modifications.
2. Rename the layer you want to work with to a simple name like "layer," "comp," or "video" without any extra numbers or symbols.
3. Save the project.
4. Apply the AESD effect from `Effects > Generate > AESD`.
5. If you want to work with a specific region of the main comp, create a solid of the desired size and position it over your comp. Select both the solid and the other layer, then click the "FX" button to set up the comp for generation based on the smaller area.
6. Adjust the settings in the effect panel, including keyframing them if necessary.
7. Click the "Generate" button to initiate the generation process. The generated images will be returned to your project.

## Known Issues/Bugs
- Sometimes, the image may appear non-existent even if it should be there. To resolve this, change a parameter in the effect, which should fix the issue.
- If the user adds new effects after the AESD effect, the AESD effect output will not reflect the new effects. To fix this, move the AESD effect below all other effects.
- If the images aren't updating properly, start from time 0, press the space bar, and let After Effects RAM render, which will force the images to update.
- The layer source control in the custom effect doesn't actually do anything. I'm wanting to eventually have this determine what the effect acts upon.

## Tested System Specifications

- **Processor:**
  - Processor: 12th Gen Intel(R) Core(TM) i7-12700H
  - Number of Cores: 20
  - Speed: 4.6 GHz

- **Memory:**
  - RAM: 16 GB DDR5

- **Video Card:**
  - NVIDIA GeForce RTX 3060 Laptop GPU



## License
The software is licensed under the [AGPL-3.0 license](https://github.com/Trentonom0r3/After-Diffusion/blob/main/LICENSE).

## Resources and Thanks
- GPT 4.0 for helping write most of this
- [AbdullahAlfaraj](https://github.com/AbdullahAlfaraj), and his work on the [Auto Photoshop SD Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [HyperBrew Bolt-CEP](https://github.com/hyperbrew/bolt-cep)
- [aulerius](https://github.com/aulerius): You've been INCREDIBLY helpful during my development process, and I can't tell you how much I appreciate it. 

![Built_With_BOLT_CEP_Logo_White_V01](https://github.com/Trentonom0r3/After-Diffusion/assets/130304830/53b7e99f-83d0-43e1-8082-59f7accde12b)
