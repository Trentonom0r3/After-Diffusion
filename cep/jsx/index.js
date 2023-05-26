(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }// ---------------------------------- //var version = "0.0.1";

var config = {
  version: version,
  id: "com.After-Diffusion.cep",
  displayName: "After Diffusion",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "AEFT",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "After Diffusion",
    autoVisible: true,
    width: 300,
    height: 450
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: ["Python"],
  copyZipAssets: []
};

var ns = config.id;

// aeft/aeft.ts
//imports response image at the CTI
var importImageAtCTI = function importImageAtCTI(imagePath) {
  var comp = app.project.activeItem;
  if (!(comp instanceof CompItem)) {
    console.log("No active composition.");
    return {
      success: false,
      message: "No active composition."
    };
  }
  var imageFile = new File(imagePath);
  var importedImage = app.project.importFile(new ImportOptions(imageFile));
  var imageLayer = comp.layers.add(importedImage);
  imageLayer.startTime = comp.time;
  console.log("Image imported successfully.");
  return {
    success: true,
    message: "Image imported successfully."
  };
};
var getwidth = function getwidth() {
  var comp = app.project.activeItem;
  if (comp !== null && comp instanceof CompItem) {
    var width = comp.width;
    return width;
  } else {
    alert("Please select a composition first.");
  }
};
var getheight = function getheight() {
  var comp = app.project.activeItem;
  if (comp !== null && comp instanceof CompItem) {
    var height = comp.height;
    return height;
  } else {
    alert("Please select a composition first.");
  }
};

//get the CTI
var getCTI = function getCTI() {
  var comp = app.project.activeItem;
  if (comp !== null && comp instanceof CompItem) {
    var cti = comp.time;
    var frameNum = Math.floor(cti / comp.frameDuration);
    return frameNum;
  } else {
    alert("Please select a composition first.");
  }
};
function GetInitialSolidPosition(preComp) {
  if (!(preComp instanceof CompItem)) {
    alert("Invalid pre-comp.");
    return;
  }
  var solid = preComp.layer(1);
  var solidPosition = solid.property("Position").value.slice(); // Create a duplicate

  return solidPosition;
}
function PositionChange(preComp) {
  if (!(preComp instanceof CompItem)) {
    alert("Invalid pre-comp.");
    return;
  }
  var solid = preComp.layer(1);
  var video = preComp.layer(2);

  // Get the anchor point value
  var anchorPoint = solid.property("Anchor Point").value;
  video.parent = solid;
  video.trackMatteType = TrackMatteType.ALPHA;
  solid.property("Position").setValue(anchorPoint);
  preComp.width = solid.width;
  preComp.height = solid.height;
  preComp.layer(1).remove();
}

//function ChangeComp() {
var ChangeComp = function ChangeComp() {
  // Check if project file exists/has been saved
  if (app.project.file == null) {
    alert("Please save your project first.");
    return;
  }
  var mainComp = app.project.activeItem;
  if (!(mainComp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }
  var solidLayer = null;
  var videoLayer = null;

  // Iterate over all layers in the composition to find the solid layer
  for (var i = 1; i <= mainComp.numLayers; i++) {
    var layer = mainComp.layer(i);
    if (layer.name.toLowerCase().indexOf("solid") !== -1) {
      solidLayer = layer;
      break;
    }
  }
  if (!solidLayer) {
    return;
  }

  // Find the video layer
  videoLayer = mainComp.layer(mainComp.numLayers);
  if (!videoLayer) {
    alert("Video layer not found.");
    return;
  }
  app.beginUndoGroup("Change Comp");

  // Duplicate and rename the video layer
  var duplicatedVideoLayer = videoLayer.duplicate();
  videoLayer.name = "Duplicated Video Layer";

  // Create a new pre-comp containing the solid and duplicated video layers
  var preCompName = "New Pre-comp";
  var newPreComp = mainComp.layers.precompose([solidLayer.index, duplicatedVideoLayer.index], preCompName, true);
  var preCompLayer = mainComp.layer(newPreComp.name);
  var initialSolidPosition = GetInitialSolidPosition(preCompLayer.source);
  PositionChange(preCompLayer.source);
  preCompLayer.position.setValue([initialSolidPosition[0], initialSolidPosition[1]]);
  app.endUndoGroup();

  // Opens the new precomp
  app.executeCommand(2523);
};

//function to set seed based on image
var getseed = function getseed() {
  // Get the active item (composition)
  var comp = app.project.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }

  // Get the selected layers
  var layers = comp.selectedLayers;
  if (layers.length < 1) {
    alert("No layer selected!");
    return null;
  }

  // Get the first selected layer
  var layer = layers[0];

  // Get the layer's name
  var layerName = layer.name;

  // Use a regular expression to extract the number from the layer's name
  var match = layerName.match(/image_(\d+)\_(\d+)\.png/);
  if (match) {
    // If the regex matched, return the number
    return match[1];
  } else {
    // If the regex did not match, alert an error and return null
    alert("The layer's name does not match the expected format!");
    return null;
  }
};
var getlength = function getlength() {
  var comp = app.project.activeItem;
  if (comp !== null && comp instanceof CompItem) {
    var lengthInFrames = Math.round(comp.duration * comp.frameRate);
    return lengthInFrames;
  } else {
    alert("Please select a composition first.");
  }
};
function checkRotoscope(layer) {
  for (var i = 1; i <= layer('Effects').numProperties; i++) {
    if (layer('Effects')(i).matchName === "ADBE Samurai") {
      return true;
    }
  }
  return false;
}
function checkCompSize(comp, layer) {
  if (comp.width != layer.width || comp.height != layer.height) {
    return true;
  }
  return false;
}
function checkInputLayer(comp) {
  // Iterate over the layers in the comp
  for (var i = 1; i <= comp.layers.length; i++) {
    var layer = comp.layers[i];
    // Check if the layer name contains the word 'Input'
    if (layer.name.indexOf('Input') !== -1) {
      return true;
    }
  }
  return false;
}
var RenderCheck = function RenderCheck() {
  var comp = app.project.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected.");
    return;
  }
  var rotoscopeExists = false;
  var compSizeDifferent = false;
  var inputLayerExists = false;

  // Iterate over the layers in the comp
  for (var i = 1; i <= comp.layers.length; i++) {
    var layer = comp.layers[i];
    if (checkRotoscope(layer)) {
      rotoscopeExists = true;
    }
    if (checkCompSize(comp, layer)) {
      compSizeDifferent = true;
    }
  }
  inputLayerExists = checkInputLayer(comp);
  if (rotoscopeExists) {
    MaskComp();
    return;
  }
  if (compSizeDifferent) {
    RegularComp();
    return;
  }
  if (!inputLayerExists) {
    RegularComp();
    return;
  }
};
function RegularComp() {
  // Get the active composition
  var precomp = app.project.activeItem;
  if (precomp !== null && precomp instanceof CompItem) {
    // Save the comp for later use
    var savedComp = precomp;

    // Define the video name and output paths
    precomp.name.split(".")[0];
    var pluginFolderPath = app.project.file.path;
    //if pluginfolderpath isn't found, alert saying to save the project.
    if (pluginFolderPath === "") {
      alert("Please save the project before rendering.");
      return;
    }

    // Set the render settings
    var renderQueue = app.project.renderQueue;
    var render1 = renderQueue.items.add(precomp);
    var outputModule = render1.outputModule(1);

    // Setting the output file type to QuickTime video (mov)
    outputModule.applyTemplate("H.264 - Match Render Settings - 40 Mbps");
    render1.applyTemplate("Best Settings");
    render1.setSetting("Effects", "All Off");

    // Set the output file name and folder for the video
    var counter = 1;
    var outputFilePath;
    var file;
    do {
      outputFilePath = pluginFolderPath + "/" + "Input" + counter + ".mp4";
      file = new File(outputFilePath);
      counter++;
    } while (file.exists);
    outputModule.file = file;
    // Start the render and wait for it to finish
    renderQueue.render();
    while (render1.status != RQItemStatus.DONE) {
      $.sleep(100);
    }

    // Import the rendered video back into the composition
    var importedVideo = app.project.importFile(new ImportOptions(new File(outputFilePath)));
    savedComp.layers.add(importedVideo);

    // Remove the original layer
    savedComp.layer(savedComp.layers.length).remove();

    // Show a message when rendering is complete
  } else {
    alert("Please select a composition first.");
  }
}

//function to render the mask along with the video
function MaskComp() {
  var precomp = app.project.activeItem;
  if (precomp !== null && precomp instanceof CompItem) {
    var savedComp = precomp;
    var pluginFolderPath = app.project.file.path;
    var renderQueue = app.project.renderQueue;
    var render1 = renderQueue.items.add(precomp);
    var outputModule1 = render1.outputModule(1);
    outputModule1.applyTemplate("H.264 - Match Render Settings - 40 Mbps");
    render1.applyTemplate("Best Settings");
    render1.setSetting("Effects", "All Off");
    var counter = 1;
    var outputFilePath;
    var file;
    do {
      outputFilePath = pluginFolderPath + "/" + "Input" + counter + ".mp4";
      file = new File(outputFilePath);
      counter++;
    } while (file.exists);
    outputModule1.file = file;
    var render2 = renderQueue.items.add(precomp);
    var outputModule2 = render2.outputModule(1);
    outputModule2.applyTemplate("Alpha Only");
    counter = 1;
    var MaskFilePath;
    var Maskfile;
    do {
      MaskFilePath = pluginFolderPath + "/" + "Inpaint" + counter + ".mp4";
      Maskfile = new File(MaskFilePath);
      counter++;
    } while (Maskfile.exists);
    outputModule2.file = Maskfile;
    renderQueue.render();
    while (render1.status != RQItemStatus.DONE) {
      $.sleep(100);
    }
    while (render2.status != RQItemStatus.DONE) {
      $.sleep(100);
    }
    var importedMask = app.project.importFile(new ImportOptions(new File(MaskFilePath)));
    savedComp.layers.add(importedMask);
    var importedVideo = app.project.importFile(new ImportOptions(new File(outputFilePath)));
    savedComp.layers.add(importedVideo);
    savedComp.layer(savedComp.layers.length).remove();
  } else {
    alert("Please select a composition first.");
  }
}
var imageComp;
var startNewImageComp = function startNewImageComp() {
  imageComp = null;
};
var importImageAtFrame = function importImageAtFrame(imagePath, frame) {
  var mainComp = app.project.activeItem;
  if (!(mainComp instanceof CompItem)) {
    alert("No active composition.");
    return;
  }
  var frameRate = mainComp.frameRate;
  var timeInSeconds = frame / frameRate;
  var imageFile = new File(imagePath);
  var importedImage = app.project.importFile(new ImportOptions(imageFile));
  if (!imageComp) {
    var compName = 'imageComp';
    var compCounter = 1;

    // Check if a composition with the given name already exists
    while (compExists(compName)) {
      compName = 'imageComp' + compCounter;
      compCounter++;
    }
    imageComp = app.project.items.addComp(compName, mainComp.width, mainComp.height, mainComp.pixelAspect, mainComp.duration, mainComp.frameRate);
    mainComp.layers.add(imageComp);
  }
  var imageLayer = imageComp.layers.add(importedImage);
  imageLayer.startTime = timeInSeconds;
  var durationInFrames = Math.round(importedImage.duration * importedImage.frameRate);
  imageLayer.outPoint = timeInSeconds + durationInFrames / frameRate;
  return "Image imported successfully.";
};

// Helper function to check if a composition exists
function compExists(name) {
  for (var i = 1; i <= app.project.numItems; i++) {
    if (app.project.item(i).name === name && app.project.item(i) instanceof CompItem) {
      return true;
    }
  }
  return false;
}
var comp;

//function to get the path of the video and the frame#
//function to get the path of the video and the frame#
var initimagepayload = function initimagepayload(frame) {
  if (!comp) {
    comp = app.project.activeItem;
  }
  if (comp !== null && comp instanceof CompItem) {
    comp.frameRate;

    // look for a layer containing the word 'input'
    var layer = null;
    for (var i = 1; i <= comp.numLayers; i++) {
      if (comp.layer(i).name.toLowerCase().indexOf('input') !== -1) {
        layer = comp.layer(i);
        break;
      }
    }
    if (layer === null) {
      alert("No layer containing 'input' was found.");
      return;
    }
    if (layer.source instanceof FootageItem) {
      var footage = layer.source;
      if (footage.mainSource.isStill) {
        alert("The footage is not an image sequence.");
      } else {
        var sequenceFile = footage.mainSource.file;
        var paddedFrameNum = ("00000" + frame).slice(-5);
        var frameFile = new File(sequenceFile.parent.fsName + "/" + sequenceFile.displayName.replace(/(\d{5})(?=\.[^.]+$)/, paddedFrameNum));
        var result = {
          path: frameFile.fsName,
          // the frame path value
          frame: frame // the frame number at CTI
        };

        return JSON.stringify(result);
      }
    } else {
      alert("The selected layer is not a FootageItem.");
    }
  } else {
    alert("Please select a composition first.");
  }
};

//function to get the path of the video and the frame#
var maskimagepayload = function maskimagepayload(frame) {
  if (!comp) {
    comp = app.project.activeItem;
  }
  if (comp !== null && comp instanceof CompItem) {
    comp.frameRate;

    // look for a layer containing the word 'Inpaint'
    var layer = null;
    for (var i = 1; i <= comp.numLayers; i++) {
      if (comp.layer(i).name.indexOf('Inpaint') !== -1) {
        layer = comp.layer(i);
        break;
      }
    }
    if (layer === null) {
      alert("No layer containing 'Inpaint' was found.");
      return;
    }
    if (layer.source instanceof FootageItem) {
      var footage = layer.source;
      if (footage.mainSource.isStill) {
        alert("The footage is not an image sequence.");
      } else {
        var sequenceFile = footage.mainSource.file;
        var paddedFrameNum = ("00000" + frame).slice(-5);
        var frameFile = new File(sequenceFile.parent.fsName + "/" + sequenceFile.displayName.replace(/(\d{5})(?=\.[^.]+$)/, paddedFrameNum));
        var result = {
          path: frameFile.fsName,
          // the frame path value
          frame: frame // the frame number at CTI
        };

        return JSON.stringify(result);
      }
    } else {
      alert("The selected layer is not a FootageItem.");
    }
  } else {
    alert("Please select a composition first.");
  }
};

// Define the function
var getPluginParams = function getPluginParams(comp) {
  // Access the currently selected layer
  var layer = comp.selectedLayers[0];
  if (!layer) {
    alert("No layer selected.");
    return;
  }

  // Access the specified plugin
  var plugin = layer.effect('ADBE AESD');
  if (!plugin) {
    alert("Plugin 'ADBE AESD' not found.");
    return;
  }

  // Define mappings from dropdown indices to text values
  var samplerMethodOptions = {
    1: "Euler a",
    2: "Euler",
    3: "LMS",
    4: "Heun",
    5: "DPM2",
    6: "DPM2 a",
    7: "DPM++ 2S a",
    8: "DPM++ 2M",
    9: "DPM++ SDE",
    10: "DPM fast",
    11: "DPM adaptive",
    12: "LMS Karras",
    13: "DPM2 Karras",
    14: "DPM2 a Karras",
    15: "DPM++ 2S a Karras",
    16: "DPM++ 2M Karras",
    17: "DPM++ SDE Karras",
    18: "DDIM",
    19: "PLMS",
    20: "UniPC"
  };
  var scriptsOptions = {
    1: "None",
    2: "img2img alternative test",
    3: "loopback",
    4: "outpainting mk2",
    5: "poor man's outpainting",
    6: "prompt matrix",
    7: "prompts from file or textbox",
    8: "sd upscale",
    9: "x/y/z plot",
    10: "controlnet m2m",
    11: "depthmap"
    // Add more options as needed
  };

  var preprocessorOptions = {
    1: "none",
    2: "canny",
    3: "depth",
    4: "depth_leres",
    5: "depth_leres++",
    6: "hed",
    7: "hed_safe",
    8: "mediapipe_face",
    9: "mlsd",
    10: "normal_map",
    11: "openpose",
    12: "openpose_hand",
    13: "openpose_face",
    14: "openpose_faceonly",
    15: "openpose_full",
    16: "clip_vision",
    17: "color",
    18: "pidinet",
    19: "pidinet_safe",
    20: "pidinet_sketch",
    21: "pidinet_scribble",
    22: "scribble_xdog",
    23: "scribble_hed",
    24: "segmentation",
    25: "threshold",
    26: "depth_zoe",
    27: "normal_bae",
    28: "oneformer_coco",
    29: "oneformer_ade20k",
    30: "lineart",
    31: "lineart_coarse",
    32: "lineart_anime",
    33: "lineart_standard",
    34: "shuffle",
    35: "tile_resample",
    36: "invert",
    37: "lineart_anime_denoise",
    38: "reference_only",
    39: "reference_adain",
    40: "reference_adain+attn",
    41: "inpaint"
    // Add more options as needed
  };

  var modelOptions = {
    1: "none",
    2: "control_v11e_sd15_ip2p [c4bb465c]",
    3: "control_v11e_sd15_shuffle [526bfdae]",
    4: "control_v11f1e_sd15_tile [a371b31b]",
    5: "control_v11f1p_sd15_depth [cfd03158]",
    6: "control_v11p_sd15_canny [d14c016b]",
    7: "control_v11p_sd15_inpaint [ebff9138]",
    8: "control_v11p_sd15_lineart [43d4be0d]",
    9: "control_v11p_sd15_mlsd [aca30ff0]",
    10: "control_v11p_sd15_normalbae [316696f1]",
    11: "control_v11p_sd15_openpose [cab727d4]",
    12: "control_v11p_sd15_scribble [d4ba51ff]",
    13: "control_v11p_sd15_seg [e1f51eb9]",
    14: "control_v11p_sd15_softedge [a8575a2a]",
    15: "control_v11p_sd15s2_lineart_anime [3825e83e]"
    // Add more options as needed
  };

  var generationTypeOptions = {
    1: "TXT2IMG",
    2: "IMG2IMG",
    3: "IMG2IMG Inpaint"
  };
  var controlModeOptions = {
    1: "Balanced",
    2: "My Prompt is More Important",
    3: "Controlnet is More Important"
  };

  // Define an object to store the plugin parameters
  var params = {};

  // Retrieve the selected layer index from the plugin
  var selectedLayerIndex = plugin.property("Input").value;

  // Get the composition reference
  var comp = app.project.activeItem;
  if (comp && comp instanceof CompItem) {
    // Check if the selected layer index is valid
    if (selectedLayerIndex >= 1 && selectedLayerIndex <= comp.numLayers) {
      // Get the selected layer
      var selectedLayer = comp.layer(selectedLayerIndex);

      // Get the source file path
      if (selectedLayer.source) {
        var sourceFile = selectedLayer.source.file;
        if (sourceFile) {
          params.sourcePath = sourceFile.fsName; // Use fsName to get the full file path
        } else {
          params.sourcePath = "No source assigned";
        }
      } else {
        params.sourcePath = "No source assigned";
      }

      // Get the current frame
      params.currentFrame = Math.round(comp.frameRate * comp.time);
    } else {
      params.sourcePath = "Invalid layer index";
      params.currentFrame = 0;
    }
  } else {
    params.sourcePath = "No composition selected";
    params.currentFrame = 0;
  }
  params.samplerMethod = samplerMethodOptions[plugin.property("Sampler Method").value];
  params.steps = plugin.property("Steps").value;
  params.cfgScale = plugin.property("CFG Scale").value;
  params.denoisingStrength = plugin.property("Denoising Strength").value;
  params.scripts = scriptsOptions[plugin.property("Scripts").value];
  params.generationType = generationTypeOptions[plugin.property("Generation Type").value];
  params.controlnet1 = {
    enable: plugin.property("Enable Controlnet 1").value,
    preprocessor: preprocessorOptions[plugin.property("Preprocessor").value],
    model: modelOptions[plugin.property("Model").value],
    weight: plugin.property("Weight").value,
    guidanceStart: plugin.property("Guidance Start").value,
    guidanceEnd: plugin.property("Guidance End").value,
    controlMode: controlModeOptions[plugin.property("Control Mode").value]
  };
  params.controlnet2 = {
    enable: plugin.property("Enable Controlnet 2").value,
    preprocessor: preprocessorOptions[plugin.property("Preprocessor").value],
    model: modelOptions[plugin.property("Model").value],
    weight: plugin.property("Weight").value,
    guidanceStart: plugin.property("Guidance Start").value,
    guidanceEnd: plugin.property("Guidance End").value,
    controlMode: controlModeOptions[plugin.property("Control Mode").value]
  };
  params.controlnet3 = {
    enable: plugin.property("Enable Controlnet 3").value,
    preprocessor: preprocessorOptions[plugin.property("Preprocessor").value],
    model: modelOptions[plugin.property("Model").value],
    weight: plugin.property("Weight").value,
    guidanceStart: plugin.property("Guidance Start").value,
    guidanceEnd: plugin.property("Guidance End").value,
    controlMode: controlModeOptions[plugin.property("Control Mode").value]
  };
  params.controlnet4 = {
    enable: plugin.property("Enable Controlnet 4").value,
    preprocessor: preprocessorOptions[plugin.property("Preprocessor").value],
    model: modelOptions[plugin.property("Model").value],
    weight: plugin.property("Weight").value,
    guidanceStart: plugin.property("Guidance Start").value,
    guidanceEnd: plugin.property("Guidance End").value,
    controlMode: controlModeOptions[plugin.property("Control Mode").value]
  };
  params.controlnet5 = {
    enable: plugin.property("Enable Controlnet 5").value,
    preprocessor: preprocessorOptions[plugin.property("Preprocessor").value],
    model: modelOptions[plugin.property("Model").value],
    weight: plugin.property("Weight").value,
    guidanceStart: plugin.property("Guidance Start").value,
    guidanceEnd: plugin.property("Guidance End").value,
    controlMode: controlModeOptions[plugin.property("Control Mode").value]
  };
  var payload = {
    images: {
      path: params.sourcePath,
      frame: params.currentFrame
    },
    sampler: params.samplerMethod,
    steps: params.steps,
    cfg_scale: params.cfgScale,
    denoising_strength: params.denoisingStrength,
    script_name: params.scripts,
    mode: 4,
    //add mode options
    inpainting_fill: 1,
    //add inpainting fill options
    enableControlnet: {
      alwayson_scripts: {
        controlnet: {
          args: [{
            enabled: params.controlnet1.enable,
            module: params.controlnet1.preprocessor,
            model: params.controlnet1.model,
            weight: params.controlnet1.weight,
            resize_mode: 1,
            //add resize mode options
            low_vram: false,
            //add checkbox
            guidance_start: params.controlnet1.guidanceStart,
            guidance_end: params.controlnet1.guidanceEnd,
            pixel_perfect: true
          }, {
            enabled: params.controlnet2.enable,
            module: params.controlnet2.preprocessor,
            model: params.controlnet2.model,
            weight: params.controlnet2.weight,
            resize_mode: 1,
            low_vram: false,
            guidance_start: params.controlnet2.guidanceStart,
            guidance_end: params.controlnet2.guidanceEnd,
            pixel_perfect: true
          }, {
            enabled: params.controlnet3.enable,
            module: params.controlnet3.preprocessor,
            model: params.controlnet3.model,
            weight: params.controlnet3.weight,
            resize_mode: 1,
            low_vram: false,
            guidance_start: params.controlnet3.guidanceStart,
            guidance_end: params.controlnet3.guidanceEnd,
            pixel_perfect: true
          }, {
            enabled: params.controlnet4.enable,
            module: params.controlnet4.preprocessor,
            model: params.controlnet4.model,
            weight: params.controlnet4.weight,
            resize_mode: 1,
            low_vram: false,
            guidance_start: params.controlnet4.guidanceStart,
            guidance_end: params.controlnet4.guidanceEnd,
            pixel_perfect: true
          }, {
            enabled: params.controlnet5.enable,
            module: params.controlnet5.preprocessor,
            model: params.controlnet5.model,
            weight: params.controlnet5.weight,
            resize_mode: 1,
            low_vram: false,
            guidance_start: params.controlnet5.guidanceStart,
            guidance_end: params.controlnet5.guidanceEnd,
            pixel_perfect: true
          }]
        }
      }
    }
  };
  alert(JSON.stringify(payload));
  return payload;
};

// Usage
var comp = app.project.activeItem;

var aeft = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  importImageAtCTI: importImageAtCTI,
  getwidth: getwidth,
  getheight: getheight,
  getCTI: getCTI,
  ChangeComp: ChangeComp,
  getseed: getseed,
  getlength: getlength,
  RenderCheck: RenderCheck,
  startNewImageComp: startNewImageComp,
  importImageAtFrame: importImageAtFrame,
  initimagepayload: initimagepayload,
  maskimagepayload: maskimagepayload,
  getPluginParams: getPluginParams
});

var main;
switch (BridgeTalk.appName) {
  case "aftereffects":
  case "aftereffectsbeta":
    main = aeft;
    break;
}

var host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
})(this);