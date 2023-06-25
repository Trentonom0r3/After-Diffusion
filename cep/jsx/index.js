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
  copyAssets: ["Python"],
  copyZipAssets: []
};

var ns = config.id;

var comp;
var layer;
var initialize = function initialize() {
  if (comp instanceof CompItem) {
    comp = app.project.activeItem;
    if (!comp) {
      alert("No composition is selected. Please select a composition.");
      throw new Error("No composition selected");
    }
    layer = comp.selectedLayers[0];
    if (!layer) {
      alert("No layer is selected in the active composition. Please select a layer.");
      throw new Error("No layer selected");
    }
    for (var i = 1; i <= layer.effect.numProperties; i++) {
      if (layer.effect(i).matchname === "ADBE AESD") {
        break;
      }
    }
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
var checkAESD = function checkAESD() {
  comp = app.project.activeItem;
  // Check if project file exists/has been saved
  if (app.project.file == null) {
    alert("Please save your project first.");
    return;
  }
  var comp = app.project.activeItem;
  if (!(comp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }
  var solidLayer = null;
  var otherlayer = null;
  solidLayer = comp.selectedLayers[0];
  if (!solidLayer) {
    return;
  }

  // Find the video layer
  otherlayer = comp.selectedLayers[1];
  if (!otherlayer) {
    alert("Video layer not found.");
    return;
  }
  app.beginUndoGroup("Change Comp");

  // Duplicate and rename the video layer
  var duplicatedVideoLayer = otherlayer.duplicate();
  otherlayer.name = "Duplicated Video Layer";

  // Create a new pre-comp containing the solid and duplicated video layers
  var preCompName = "New";
  var newPreComp = comp.layers.precompose([solidLayer.index, duplicatedVideoLayer.index], preCompName, true);
  var preCompLayer = comp.layer(newPreComp.name);
  var initialSolidPosition = GetInitialSolidPosition(preCompLayer.source);
  PositionChange(preCompLayer.source);
  preCompLayer.position.setValue([initialSolidPosition[0], initialSolidPosition[1]]);
  preCompLayer.Effects.addProperty('ADBE AESD');
  app.endUndoGroup();
};

//clear the selections
var clearSelection = function clearSelection() {
  comp = null;
  layer = null;
};

//importimageatframe
var imageComp;
var startNewImageComp = function startNewImageComp() {
  imageComp = null;
};
function compExists(name) {
  for (var i = 1; i <= app.project.numItems; i++) {
    if (app.project.item(i).name === name && app.project.item(i) instanceof CompItem) {
      return true;
    }
  }
  return false;
}
var importImageAtFrame = function importImageAtFrame(imagePath, frame) {
  if (!(comp instanceof CompItem)) {
    alert("No active composition.");
    return;
  }
  var frameRate = comp.frameRate;
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
    imageComp = app.project.items.addComp(compName, comp.width, comp.height, comp.pixelAspect, comp.duration, comp.frameRate);
    comp.layers.add(imageComp);
  }
  var imageLayer = imageComp.layers.add(importedImage);
  imageLayer.startTime = timeInSeconds;
  var durationInFrames = Math.round(importedImage.duration * importedImage.frameRate);
  imageLayer.outPoint = timeInSeconds + durationInFrames / frameRate;
  return "Image imported successfully.";
};
var getlength = function getlength() {
  if (comp !== null && comp instanceof CompItem) {
    var lengthInFrames = Math.round(comp.duration * comp.frameRate);
    return lengthInFrames;
  } else {
    alert("Please select a composition first.");
  }
};
var getStartFrame = function getStartFrame() {
  if (comp && comp instanceof CompItem) {
    var frameRate = comp.frameRate;
    var startTime = comp.displayStartTime;
    var frame = Math.round(startTime * frameRate); // Adjust for composition start time

    return frame < 0 ? -frame : frame; // Return positive frame number
  } else {
    alert("Please select a composition first.");
    return null;
  }
};

//modify to accept frame as path. Modify to get values from CEP, and modify to handle the different modes.
var getPluginParams = function getPluginParams() {
  comp = app.project.activeItem;
  layer = comp.selectedLayers[0];
  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD"); // Replace "ADBE AESD" with your effect match name

  var paramValues = [];
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
    3: "IMG2IMG_INPAINT",
    4: "Inpaint Sketch"
  };
  var batchoptions = {
    0: "False",
    1: "True"
  };
  paramValue.push(typeLabel + ": " + typeOptions[typeIndex]);
  paramValue.push(batchLabel + ": " + batchoptions[batchValue]);
  paramValues.push(paramValue);
  return paramValues;
};
var samplerMethodNames = ["Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM fast", "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras", "DPM++ 2M Karras", "DPM++ SDE Karras", "DDIM", "PLMS", "UniPC"];
var scriptNames = ["None", "img2img alternative test", "loopback", "outpainting mk2", "poor man's outpainting", "prompt matrix", "prompts from file or textbox", "sd upscale", "x/y/z plot", "controlnet m2m", "depthmap"];
var preprocessorNames = ["none", "canny", "depth", "depth_leres", "depth_leres++", "hed", "hed_safe", "mediapipe_face", "mlsd", "normal_map", "openpose", "openpose_hand", "openpose_face", "openpose_faceonly", "openpose_full", "clip_vision", "color", "pidinet", "pidinet_safe", "pidinet_sketch", "pidinet_scribble", "scribble_xdog", "scribble_hed", "segmentation", "threshold", "depth_zoe", "normal_bae", "oneformer_coco", "oneformer_ade20k", "lineart", "lineart_coarse", "lineart_anime", "lineart_standard", "shuffle", "tile_resample", "invert", "lineart_anime_denoise", "reference_only", "reference_adain", "reference_adain+attn", "inpaint"];
var modelNames = ["none", "control_v11e_sd15_ip2p [c4bb465c]", "control_v11e_sd15_shuffle [526bfdae]", "control_v11f1e_sd15_tile [a371b31b]", "control_v11f1p_sd15_depth [cfd03158]", "control_v11p_sd15_canny [d14c016b]", "control_v11p_sd15_inpaint [ebff9138]", "control_v11p_sd15_lineart [43d4be0d]", "control_v11p_sd15_mlsd [aca30ff0]", "control_v11p_sd15_normalbae [316696f1]", "control_v11p_sd15_openpose [cab727d4]", "control_v11p_sd15_scribble [d4ba51ff]", "control_v11p_sd15_seg [e1f51eb9]", "control_v11p_sd15_softedge [a8575a2a]", "control_v11p_sd15s2_lineart_anime [3825e83e]"];
var getT2IParams = function getT2IParams(frame) {
  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD");
  var paramValue = [];
  var time = frame / comp.frameRate;
  var originalTime = comp.time; // Store the original comp time

  comp.time = time;
  var width = layer.width;
  var height = layer.height;
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
  comp.time = originalTime;
  return paramValue;
};
var getI2IParams = function getI2IParams(frame) {
  var comp = app.project.activeItem;
  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD");
  var paramValue = [];
  var time = frame / comp.frameRate;
  var originalTime = comp.time; // Store the original comp time

  comp.time = time;
  var width = layer.width;
  var height = layer.height;
  paramValue.push(effect.property("Denoising Strength").value);
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
  comp.time = originalTime; // Set the comp time back to the original value

  return paramValue;
};
var getI2IMaskParams = function getI2IMaskParams(frame) {
  var comp = app.project.activeItem;
  var effect = layer.property("ADBE Effect Parade").property("ADBE AESD");
  var paramValue = [];
  var time = frame / comp.frameRate;
  var originalTime = comp.time; // Store the original comp time

  comp.time = time;
  var width = layer.width;
  var height = layer.height;
  paramValue.push(effect.property("Denoising Strength").value);
  paramValue.push(width);
  paramValue.push(height);
  paramValue.push(effect.property("Mask Mode").value);
  paramValue.push(effect.property("Masked Content").value);
  paramValue.push(effect.property("Inpaint Area").value);
  paramValue.push(effect.property("Only masked padding").value);
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
  comp.time = originalTime;
  return paramValue;
};

//function to set seed based on image
var getseed = function getseed() {
  // Get the active item (composition)
  var ccomp = app.project.activeItem;
  if (!ccomp || !(ccomp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }

  // Get the selected layers
  var layers = ccomp.selectedLayers;
  if (layers.length < 1) {
    alert("No layer selected!");
    return null;
  }

  // Get the first selected layer
  var clayer = layers[0];

  // Get the layer's name
  var layerName = clayer.name;
  // Use a regular expression to extract the number from the layer's name
  var match = layerName.match(/image_(\d+)(?:_(\d+))?.png/);
  if (match) {
    // If the regex matched, return the number
    return match[1];
  } else {
    // If the regex did not match, alert an error and return null
    alert("The layer's name does not match the expected format!");
    return null;
  }
};
var getFrame = function getFrame() {
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }
  var frameRate = comp.frameRate;
  var startTime = comp.displayStartTime;
  var frame = Math.round((comp.time - startTime) * frameRate); // Adjust for composition start time

  return frame < 0 ? -frame : frame; // Return positive frame number
};

var getProjectPath = function getProjectPath() {
  // Ensure a project is open
  if (!app.project) {
    alert("No project open");
    return;
  }

  // Ensure the project has been saved at least once (it has a path)
  if (!app.project.file) {
    alert("Please save the project first");
    return;
  }

  // Return the full path
  var fullPath = app.project.file.fsName;

  //remove the filename from the path
  var path = fullPath.substring(0, fullPath.lastIndexOf('\\'));
  return path;
};

//get the name of the selected layer
var getLayerName = function getLayerName() {
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }
  var layers = comp.selectedLayers;
  if (layers.length < 1) {
    alert("No layer selected!");
    return null;
  }
  var layerName = layer.name;
  return layerName;
};

//rename the selected layer
var renameLayer = function renameLayer(newName) {
  if (!comp || !(comp instanceof CompItem)) {
    alert("No comp selected!");
    return null;
  }
  var layers = comp.selectedLayers;
  if (layers.length < 1) {
    alert("No layer selected!");
    return null;
  }
  //create a conter to have unique layer names
  var counter = 0;
  for (var i = 0; i < layers.length; i++) {
    layers[i].name = newName + counter;
    counter++;
  }
};
var sketchlayer;
//function to create a new layer (in a pre comp), add the paint effect, and finally set the layer controls on the original layer.

var createSketchLayer = function createSketchLayer() {
  sketchlayer = layer.duplicate();
  //create a new precomp
  var precomp = comp.layers.precompose([sketchlayer.index], "sketch", true);
  precomp.name = "sketch";
  var precomplayer = comp.layer(precomp.name);
  //set the value of the Sketch Layer control in ADBE AESD to the precomp
  precomplayer.Effects.addProperty('ADBE Paint');
  //set mode to effects+masks
};

var aeft = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  initialize: initialize,
  checkAESD: checkAESD,
  clearSelection: clearSelection,
  startNewImageComp: startNewImageComp,
  importImageAtFrame: importImageAtFrame,
  getlength: getlength,
  getStartFrame: getStartFrame,
  getPluginParams: getPluginParams,
  getT2IParams: getT2IParams,
  getI2IParams: getI2IParams,
  getI2IMaskParams: getI2IMaskParams,
  getseed: getseed,
  getFrame: getFrame,
  getProjectPath: getProjectPath,
  getLayerName: getLayerName,
  renameLayer: renameLayer,
  createSketchLayer: createSketchLayer
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