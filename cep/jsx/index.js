(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }// ---------------------------------- //var version = "0.0.1";

var config = {
  version: version,
  id: "com.AESD.cep",
  displayName: "AESD                                                         ",
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
  width: 400,
  height: 400,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "AESD",
    autoVisible: true,
    width: 100,
    height: 200
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
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var checkAESD = function checkAESD() {
  var comp = app.project.activeItem;
  if (!(comp && comp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }

  // Check if there is already a layer with 'ADBE AESD' effect
  var hasEffect = false;
  for (var i = 1; i <= comp.numLayers; i++) {
    var layer = comp.layer(i);
    if (layer.hasVideo && layer.effect.numProperties > 0) {
      for (var j = 1; j <= layer.effect.numProperties; j++) {
        if (layer.effect(j).matchName === 'ADBE AESD') {
          hasEffect = true;
          break;
        }
      }
    }
    if (hasEffect) {
      break;
    }
  }

  // Create a new adjustment layer and add 'ADBE AESD' effect if no such layer exists
  if (!hasEffect) {
    var adjLayer = comp.layers.addSolid([0, 0, 0], "Adjustment Layer", comp.width, comp.height, comp.pixelAspect, comp.duration);
    adjLayer.adjustmentLayer = true;
    adjLayer.property("ADBE Transform Group").property("ADBE Opacity").setValue(0);
    adjLayer.Effects.addProperty('ADBE AESD');
  }
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

//importimageatframe
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
var getlength = function getlength() {
  var comp = app.project.activeItem;
  if (comp !== null && comp instanceof CompItem) {
    var lengthInFrames = Math.round(comp.duration * comp.frameRate);
    return lengthInFrames;
  } else {
    alert("Please select a composition first.");
  }
};

//modify to accept frame as path. Modify to get values from CEP, and modify to handle the different modes.
var getPluginParams = function getPluginParams(frame) {
  var comp = app.project.activeItem; // Get the active composition
  var layer = comp.selectedLayers[0]; // Assuming the effect is applied to the first selected layer

  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD"); // Replace "ADBE AESD" with your effect match name

  var paramValues = [];
  var frameRate = comp.frameRate;
  var time = frame / frameRate; // Convert frame to time
  comp.time = time; // Set the composition time to the given frame

  var paramValue = [];

  // Retrieve the values of each parameter
  var typeLabel = "Type";
  var batchLabel = "Batch";
  var typeIndex = effect.property("Generation Type").value;
  var batchValue = effect.property("Enable Batch").value;

  // Mapping for "Type" options
  var typeOptions = {
    1: "TXT2IMG",
    2: "IMG2IMG",
    3: "IMG2IMG_INPAINT"
  };
  var batchoptions = {
    0: "False",
    1: "True"
  };
  paramValue.push(typeLabel + ": " + typeOptions[typeIndex]);
  paramValue.push(batchLabel + ": " + batchoptions[batchValue]);
  paramValues.push(paramValue);
  alert(JSON.stringify(paramValues));
  return paramValues;
};
var samplerMethodNames = ["Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM fast", "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras", "DPM++ 2M Karras", "DPM++ SDE Karras", "DDIM", "PLMS", "UniPC"];
var scriptNames = ["None", "img2img alternative test", "loopback", "outpainting mk2", "poor man's outpainting", "prompt matrix", "prompts from file or textbox", "sd upscale", "x/y/z plot", "controlnet m2m", "depthmap"];
var preprocessorNames = ["none", "canny", "depth", "depth_leres", "depth_leres++", "hed", "hed_safe", "mediapipe_face", "mlsd", "normal_map", "openpose", "openpose_hand", "openpose_face", "openpose_faceonly", "openpose_full", "clip_vision", "color", "pidinet", "pidinet_safe", "pidinet_sketch", "pidinet_scribble", "scribble_xdog", "scribble_hed", "segmentation", "threshold", "depth_zoe", "normal_bae", "oneformer_coco", "oneformer_ade20k", "lineart", "lineart_coarse", "lineart_anime", "lineart_standard", "shuffle", "tile_resample", "invert", "lineart_anime_denoise", "reference_only", "reference_adain", "reference_adain+attn", "inpaint"];
var modelNames = ["none", "control_v11e_sd15_ip2p [c4bb465c]", "control_v11e_sd15_shuffle [526bfdae]", "control_v11f1e_sd15_tile [a371b31b]", "control_v11f1p_sd15_depth [cfd03158]", "control_v11p_sd15_canny [d14c016b]", "control_v11p_sd15_inpaint [ebff9138]", "control_v11p_sd15_lineart [43d4be0d]", "control_v11p_sd15_mlsd [aca30ff0]", "control_v11p_sd15_normalbae [316696f1]", "control_v11p_sd15_openpose [cab727d4]", "control_v11p_sd15_scribble [d4ba51ff]", "control_v11p_sd15_seg [e1f51eb9]", "control_v11p_sd15_softedge [a8575a2a]", "control_v11p_sd15s2_lineart_anime [3825e83e]"];
var getT2IParams = function getT2IParams(frame) {
  var comp = app.project.activeItem;
  var layer = comp.selectedLayers[0];
  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD");
  var paramValue = [];
  var frameRate = comp.frameRate;
  var time = frame / frameRate;
  comp.time = time;
  var width = comp.width;
  var height = comp.height;
  paramValue.push(width);
  paramValue.push(height);
  // Retrieve the values of each parameter and get the corresponding names
  var samplerMethodIndex = effect.property("Sampler Method").value;
  paramValue.push(samplerMethodNames[samplerMethodIndex - 1]); // Adjust indexing

  paramValue.push(effect.property("Steps").value);
  paramValue.push(effect.property("Restore Faces").value);
  paramValue.push(effect.property("CFG Scale").value);
  var scriptIndex = effect.property("Scripts").value;
  if (scriptIndex !== 0) {
    paramValue.push(scriptNames[scriptIndex - 1]); // Adjust indexing
  }

  var numControlnets = 5;
  for (var i = 1; i <= numControlnets; i++) {
    paramValue.push(effect.property("Enable Controlnet " + i).value);
    var preprocessorIndex = effect.property("Preprocessor " + i).value;
    paramValue.push(preprocessorNames[preprocessorIndex - 1]); // Adjust indexing

    var modelIndex = effect.property("Model " + i).value;
    paramValue.push(modelNames[modelIndex - 1]); // Adjust indexing

    paramValue.push(effect.property("Weight " + i).value);
    paramValue.push(effect.property("Guidance Start " + i).value);
    paramValue.push(effect.property("Guidance End " + i).value);
    paramValue.push(effect.property("Control Mode " + i).value);
  }
  return paramValue;
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

//function to set up folder structure
var setup = function setup() {
  // Create a new folder in the project panel called AESD(if one doesn't exist)
  var aesdFolder = null;
  for (var i = 1; i <= app.project.items.length; i++) {
    if (app.project.items[i].name == "AESD" && app.project.items[i] instanceof FolderItem) {
      aesdFolder = app.project.items[i];
      break;
    }
  }
  if (aesdFolder == null) {
    aesdFolder = app.project.items.addFolder("AESD");
  }

  // Within that folder, create another folder called "outputs"
  var outputsFolder = null;
  for (var i = 1; i <= aesdFolder.items.length; i++) {
    if (aesdFolder.items[i].name == "outputs" && aesdFolder.items[i] instanceof FolderItem) {
      outputsFolder = aesdFolder.items[i];
      break;
    }
  }
  if (outputsFolder == null) {
    outputsFolder = aesdFolder.items.addFolder("outputs");
  }

  // Get active composition details
  var comp = app.project.activeItem;
  if (comp instanceof CompItem) {
    var placeholderNames = ["Source", "Input", "Inpaint", "Input ref", "Inpaint ref"];
    for (var i = 0; i < placeholderNames.length; i++) {
      // Check if the placeholder already exists
      var placeholder = null;
      for (var j = 1; j <= aesdFolder.items.length; j++) {
        if (aesdFolder.items[j].name == placeholderNames[i] && aesdFolder.items[j] instanceof FootageItem) {
          placeholder = aesdFolder.items[j];
          break;
        }
      }

      // If the placeholder doesn't exist, import it
      if (placeholder == null) {
        placeholder = app.project.importPlaceholder(placeholderNames[i], comp.width, comp.height, comp.pixelAspect, comp.frameRate);
        placeholder.parentFolder = aesdFolder;
      }
    }
  } else {
    return;
  }
};

//get the current time as a frame #
var getFrame = function getFrame() {
  var comp = app.project.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }
  var frameRate = comp.frameRate;
  var time = comp.time;
  var frame = time * frameRate;
  return frame;
};

var aeft = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  checkAESD: checkAESD,
  startNewImageComp: startNewImageComp,
  importImageAtFrame: importImageAtFrame,
  getlength: getlength,
  getPluginParams: getPluginParams,
  getT2IParams: getT2IParams,
  getseed: getseed,
  setup: setup,
  getFrame: getFrame
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