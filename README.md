# After-Diffusion
# Table of Contents
- [Key Features](#key-features)
- [Coming Soon](#coming-soon)
- [Planned Future Updates](#planned-future-updates)
- [Notes/Extras](#notesextras)
- [Known Issues/Bugs](#known-issuesbugs)
- [Demo](#demo)
- [Resources and Thanks](#resources-and-thanks)

## Key Features
- Work Directly with Videos: No need for PNG sequences anymore.
- Most of the work is done on the back end, allowing less work for AE, and less work for you!
- Harness the power of After Effects features without bouncing back and forth between webUI, AE, and your system.
- Set webUI models and more directly from the extension.
- TXT2IMG and full IMG2IMG support, including inpaint, single image generation, and full video generation.
- Work with specific regions of a larger comp. Seamlessly re-integrate smaller sections back into the full-sized main comp.
- Less direct action in After Effects and more happening on the back end.
- Keeps AE responsive and leads to faster overall generation and integration times.

## Coming Soon
- Full Controlnet Support
  - We already add the Preprocessors and Models to drop-down lists, but there is some sort of issue going on with either webUI or Controlnet. Once this issue is fixed, Controlnet will be fully operational. Here is the [GitHub](https://github.com/Mikubill/sd-webui-controlnet/issues/1213#issue-1702373785) issue that someone else posted for the same problem. If anyone has any other suggestions so I can get Controlnet working! 😄
- Multi Controlnet will be available, only limited by your webUI settings.
- Loras, scripts, etc
  - This will be much less intensive than the others and will be done relatively quickly.
- Swapping AE Native Render Engine for the AE Background Render Engine.
- Full Collab Support
  - Use the Standard local host webUI or change the API URL in-extension to use collab!

## Planned Future Updates
- EBSynth Integration
  - Will be adding extra features to the AE side to help with this, including:
    - Scripting auto scene-edit detection and integration of extra python scripts to get the best possible EbSynth output.
    - Looking into using NVIDIA Optical Flow SDK as opposed to ebsynth for temporal coherance
- Instruct Pix2Pix Support.
- Audio-Reactive Image Generation (for both TXT2IMG and IMG2IMG).
- Key-frameable SD settings.
- Preset Modes + Ability to add new presets.
- Prompt Saving.

## Notes/Extras
- I'm definitely going to be adjusting the UI at some point. It definitely feels way too basic and clunky right now, but I'm not sure how exactly I want to change it. (Suggestions welcome)
- The Back End uses a python server—Upon start-up, the extension will check that you have the proper dependencies installed, and if not, take care of that for you.
- My goal with this is to make things as EASY as possible, requiring the least-possible amount of user input.

## Known Issues/Bugs
- Sometimes the Extension will say 'No Layer named Input' Found, despite one existing.
   - Current work-around is to reset project, and add a solid 8 px smaller on all sides 
- SD Model List not showing certain Models
   - Under Investigation. TBD.
- AE outputs do not work Properly
   -Will be adjusting the code itself soon, but for now the workaround is as follows:
   1. Make sure the Output Module for 'H.264 - Match Render Settings - 40 Mbps' Is set to H.264 format.
   2. Make sure the output Module for 'Alpha Only' is set to output in h.264 format instead of .avi
   3. After Diffusion also uses the "Best Settings" Render template. I'm not sure how it will behave across versions, so I'd recommend manually changing the      'Effects' parameter of 'Best Settings' to 'All Off,' just to eliminate the possibility of issues from there.

## Demo

# Resources and Thanks
- GPT 4.0 for helping write most of this
- [AbdullahAlfaraj](https://github.com/AbdullahAlfaraj), and his work on the [Auto Photoshop SD Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

