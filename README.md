# After-Diffusion

A CEP Extension for Adobe After Effects that allows for seamless integration of the Stable Diffusion Web-UI. In theory, should work for all AE versions CC 2019 and up.

## Table of Contents
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Limitations and Considerations](#limitations-and-considerations)
- [Coming Soon](#coming-soon)
- [Planned Future Updates](#planned-future-updates)
- [Known Issues/Bugs](#known-issuesbugs)
- [Demo](#demo)
- [License](#license)
- [Resources and Thanks](#resources-and-thanks)
- [Notes/Extras](#notesextras)

## Key Features
- Work Directly with Videos: No need for PNG sequences anymore.
- ControlNet Support Added! Multi-ControlNet available, only limited by your webUI settings!
    - Input Image does not work, and by default, we're using pixel perfect, so only a few params.
    - To Ensure ControlNet will work, open a terminal instance in your SD main folder, and enter this code:

    ```
    git checkout '89f9faa63388756314e8a1d96cf86bf5e0663045'
    ```

    - Then, disable detectmap output in WebUI ControlNet Settings
    - 
- Most of the work is done on the backend, allowing less work for AE and less work for you!
- Harness the power of After Effects features without bouncing back and forth between webUI, AE, and your system.
- Set webUI models and more directly from the extension.
- TXT2IMG and full IMG2IMG support, including inpaint, single image generation, and full video generation.
- Work with specific regions of a larger comp. Seamlessly reintegrate smaller sections back into the full-sized main comp.
- Less direct action in After Effects and more happening on the backend.
- Keeps AE responsive and leads to faster overall generation and integration times.

## Installation

### CEP Installation
1. Download the `CEP` folder.
2. Place the `CEP` folder into the following directory: `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`.
3. Open Adobe After Effects and access the extension. 
4. Make sure you give scripts full permissions in AE preferences.

### ZXP Installation
1. Download the ZXP file from the `ZXP` folder.
2. Install the ZXP file using [ZXPInstaller](https://zxpinstaller.com/).
3. Make sure you give scripts full permissions in AE preferences.
4. You're all set!


## Usage

To use the After-Diffusion CEP extension, follow these steps:

1. Save your After Effects project.
2. Open the composition you want to work with. Note that the extension operates based on pre-comps, so the active composition will be sent to the API.
3. Launch the After-Diffusion extension from the extensions panel.
5. If you want to select a specific region for AI alteration, create a solid of the desired size using the shortcut 'Ctrl+Y'. Use this solid to define the area to be altered.
6. Choose the desired generation mode by clicking either the 'TXT2IMG' or 'IMG2IMG' button. The selected mode will be visually indicated with a colored border.
7. If using the 'IMG2IMG' mode, select the type of generation from the dropdown menu. Options include 'IMG2IMG', 'IMG2IMG Mask', 'IMG2IMG Batch', and 'IMG2IMG Mask Multi'.
8. Adjust any other available options or settings within the extension, which should be similar to the familiar options in Stable Diffusion. Hover over UI elements for tooltips and tips.
9. Start the diffusion process by clicking the "Generate" button.
10. Once the process starts, you can switch screens or perform other tasks while the extension works in the background.
11. For best results, follow the same best practices you would use in Stable Diffusion.
12. If you are selecting a smaller range of a larger video and the work area size is adjusted, consider precomposing the selection, moving all attributes, and adjusting the time in the copy to ensure accurate API call and response.
13. The output will be placed into a pre-comp within the Active Comp. For batch modes, generated images are placed in sequence within the comp.
14. Export the final result or use the compositing power of After Effects to make further Changes, and repeat!


## Limitations and Considerations
- The performance and capabilities of the extension are mainly influenced by the processing power of your computer.
    -As more features are added, you will have more and more control over the SD webUI.
- Creativity and imagination play a significant role in exploring the full potential of the extension.


## Coming Soon
- Loras, scripts, etc.
- Swapping AE Native Render Engine for the AE Background Render Engine.
- Full Google Collab Support
 - Use the Standard localhost webUI or change the API URL in-extension to use collab!

## Planned Future Updates
- Temporal Coherence
- Will be adding extra features to the AE side to help with this, including:
 - Scripting auto scene-edit detection and integration of extra python scripts to get the best possible EbSynth output.
 - Looking into using NVIDIA Optical Flow SDK as opposed to ebsynth for temporal coherence.
- Instruct Pix2Pix Support.
- Audio-Reactive Image Generation (for both TXT2IMG and IMG2IMG).
- Key-frameable SD settings.
- Preset Modes + Ability to add new presets.
- Prompt Saving.

## Known Issues/Bugs
- SD Model List not showing certain Models
 - Under Investigation. TBD.
- AE outputs not working Properly
 - Will be adjusting the code itself soon, but for now, the workaround is as follows:
   1. Make sure the Output Module for 'H.264 - Match Render Settings - 40 Mbps' is set to H.264 format.
   2. Make sure the Output Module for 'Alpha Only' is set to output in H.264 format instead of .avi.
   3. After Diffusion also uses the "Best Settings" Render template. I'm not sure how it will behave across versions, so I'd recommend manually changing the     'Effects' parameter of 'Best Settings' to 'All Off,' just to eliminate the possibility of issues from there.
- 'Input Layer not found' or rendering despite an input layer being present
  - Working on a fix currently.
- If you have older CN models/preprocessors, it may cause an error. For example, trying to use 'Depth' and 'Depth-fp16'.
- For anything else, please add a new issue, and I will get to it as soon as I can!

## Demo
[View Demo on YouTube](https://www.youtube.com/watch?v=IArI8VGK8ao&feature=youtu.be)

## License
[AGPL-3.0 license](https://github.com/Trentonom0r3/After-Diffusion/blob/main/LICENSE)

## Resources and Thanks
- GPT 4.0 for helping write most of this
- [AbdullahAlfaraj](https://github.com/AbdullahAlfaraj), and his work on the [Auto Photoshop SD Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [HyperBrew Bolt-CEP](https://github.com/hyperbrew/bolt-cep)

## Notes/Extras

- I'm developing this with minimal knowledge and experience in programming, so please be patient with me!
- I will be slowly, yet surely, addressing any and all issues that pop up. 
- Your support and feedback will be invaluable to me-- It will help me address things I may have never thought of, and help make this the best extension it can be.
- I am 100% open to collaboration, especially from those more technically skilled than I. Let's work together!

Thank you for your understanding, patience, and support!

