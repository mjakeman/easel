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

document.arrive("video", load);