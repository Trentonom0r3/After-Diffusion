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
    alert("No active composition.");
    return;
  }
  var imageFile = new File(imagePath);
  var importedImage = app.project.importFile(new ImportOptions(imageFile));
  var imageLayer = comp.layers.add(importedImage);
  imageLayer.startTime = comp.time;
  return "Image imported successfully.";
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
  maskimagepayload: maskimagepayload
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