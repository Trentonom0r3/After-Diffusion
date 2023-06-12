## Pre-Release Build Out Now!
This build is nearly complete-- most if not all feature should be working, but there will still be plenty of bugs. Error handling is not updated in this build either.
#### Usage 
- Copy the .aex file into your effect folder.
- Install CEP extension as done previously.
- Save your project, perform any edits/changes you want to on it
- after adding your masks/changes, add the After Diffusion Effect. It'll be found under Effects>Generate>AESD, or you can search for it. It works based on the selected layer.
  - Whatever you have the effect applied to, it will automatically create your input images for you in the background. 
- Adjust your settings for SD in the effect, keyframe, do whatever you want, then hit the generate button (far right side of UI)


## Estimated Release Period
I'm currently working hard to finalize the After-Diffusion V2.0 release. I anticipate that the release will be ready within the next two weeks. Please stay tuned for further updates and announcements.

# 🎉 Major Update: After-Diffusion V2.0 🎉

After-Diffusion, your favorite CEP Extension for Adobe After Effects, has undergone a major overhaul. This release is packed with updates and enhancements that you've been asking for. The tool now blends seamlessly into the AE UI, looking and feeling like a native extension. This update comes with a brand new UI and a series of incredible features designed to supercharge your workflow.

## 🎨 New UI
The new UI is designed to blend into the AE UI like a native extension. It's a small yet powerful panel, functioning as a toolbar. It can be easily accessed at any time without obstructing your other important panels.

The UI is equipped with seven simple buttons:

- Add Effect: Adds a custom effect to the selected layer. This feature also opens an override settings panel, allowing you to override CN and script settings.
- Folders: Provides a view of your Input/Inpaint images, ensuring you're working with the most recent versions.
- Models: Contains all your diffusion models.
- Prompts: Contains fields for prompt and negative prompt.
- Seed: Allows you to set your seed value, reset it to default, or take the seed value of a selected image in the comp.
- Settings: Will contain various features at a later date. The initial release will only have the option to swap your SD URL.
- Generate: Starts the generation process.

## 💪 Custom C++ Effect
The update introduces a custom C++ effect. Now, you can drag and drop, keyframe ALL parameters you're familiar with from webUI. The multi-threaded, multi-frame rendering capable effect allows everything to be done in the background, outputting the pixels you're manipulating in AE directly for use in webUI. Say goodbye to render and export loops!

## 🚦 More Robust Error Handling
Better information when errors occur and more context on how to fix them/what went wrong. This feature will drastically improve your problem-solving experience.

## 🔗 Better Backend Integration
With this update, things will feel more deeply integrated, giving you an even greater feeling of seamlessness. Work directly with videos, set webUI models, and more directly from the extension. Less direct action in After Effects and more happening on the backend.

This overhaul has been a long process, and I believe that it will be worth the wait. I am excited to see what you will create with these new tools at your disposal!

## License
The software is licensed under the [AGPL-3.0 license](https://github.com/Trentonom0r3/After-Diffusion/blob/main/LICENSE).

## Resources and Thanks
- GPT 4.0 for helping write most of this
- [AbdullahAlfaraj](https://github.com/AbdullahAlfaraj), and his work on the [Auto Photoshop SD Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [HyperBrew Bolt-CEP](https://github.com/hyperbrew/bolt-cep)
- [aulerius](https://github.com/aulerius): You've been INCREDIBLY helpful during my development process, and I can't tell you how much I appreciate it. 

![Built_With_BOLT_CEP_Logo_White_V01](https://github.com/Trentonom0r3/After-Diffusion/assets/130304830/53b7e99f-83d0-43e1-8082-59f7accde12b)
