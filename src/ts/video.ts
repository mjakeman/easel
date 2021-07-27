import "arrive";
import { browser } from "webextension-polyfill-ts";
import { InitMessage, MessageType } from "./shared";

let init = false;

function load() {
    
    if (init) return;
    init = true;

    // Initialise Easel
    let msg: InitMessage = {
        type: MessageType.INIT
    };
    browser.runtime.sendMessage(msg);
}

// Redirect to mediaplayer
// let url = window.location.href;

// if (url.includes("mediastore")) {
//     var newUrl = window.location.href.replace("mediastore", "mediaplayer");
//     window.location.replace(newUrl);
// }

// Try get video with an id of '#video'
var video = document.getElementById('video') as HTMLVideoElement;

// If #video exists, load it
if (video)
    load();

// Otherwise, wait until a video element appears
else
    document.arrive("video", load);