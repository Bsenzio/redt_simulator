"use strict";
const canvas = document.querySelector("#unity-canvas");
const status = document.querySelector("#player-status");
const message = document.querySelector("#player-message");
const start = document.querySelector("#start-player");
const progress = document.querySelector("#player-progress");
const fullscreen = document.querySelector("#fullscreen");
const desktop = document.querySelector("#desktop-build");
let config;
let instance;

function setMessage(key) {
  message.dataset.t = key;
  message.textContent = copy[language][key];
}
async function localAsset(asset, mime) {
  if (typeof asset === "string") return asset;
  if (!Array.isArray(asset) || asset.length === 0) throw new Error("Missing Unity build asset");
  const parts = [];
  for (const path of asset) {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Missing Unity build part");
    parts.push(await response.arrayBuffer());
  }
  return URL.createObjectURL(new Blob(parts, {type:mime}));
}
function syncLanguage() {
  if (instance) instance.SendMessage("Solar Field","SetLanguageFromSite",language);
}
async function startPlayer() {
  if (!config?.loaderUrl) return;
  start.hidden = true;
  progress.hidden = false;
  canvas.hidden = false;
  setMessage("loading");
  try {
    const settings = {
      dataUrl: await localAsset(config.dataUrl,"application/octet-stream"),
      frameworkUrl: await localAsset(config.frameworkUrl,"application/javascript"),
      codeUrl: await localAsset(config.codeUrl,"application/wasm"),
      streamingAssetsUrl:"StreamingAssets",
      companyName:"Yamagata University",
      productName:"REDT Simulator",
      productVersion:config.version || "1.0",
      devicePixelRatio:Math.min(window.devicePixelRatio || 1,1.5)
    };
    const script = document.createElement("script");
    script.src = config.loaderUrl;
    await new Promise((resolve,reject) => { script.onload=resolve; script.onerror=reject; document.head.append(script); });
    instance = await createUnityInstance(canvas,settings,value => { progress.value=value; });
    window.redtUnity = instance;
    status.hidden = true;
    fullscreen.disabled = false;
    syncLanguage();
    canvas.focus();
  } catch (error) {
    console.error(error);
    canvas.hidden = true;
    progress.hidden = true;
    start.hidden = false;
    setMessage("playerFailure");
  }
}
document.addEventListener("redt-language",syncLanguage);
start.addEventListener("click",startPlayer);
fullscreen.addEventListener("click",() => instance?.SetFullscreen(1));
fetch("player.json").then(response => {
  if (!response.ok) throw new Error("No build manifest");
  return response.json();
}).then(manifest => {
  config = manifest;
  if (config.desktop) { desktop.href=config.desktop; desktop.hidden=false; }
  start.hidden = !config.loaderUrl;
  setMessage(config.loaderUrl ? "start" : "unavailable");
}).catch(() => setMessage("unavailable"));
