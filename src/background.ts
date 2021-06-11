import {Course, Recording, Message, MessageType} from "./shared";
import { browser } from "webextension-polyfill-ts";

function openEasel(message: Message) {
    if (message.type === MessageType.OPEN) {
        localStorage.courseData = JSON.stringify(message.course);
        browser.tabs.create({"url": "/html/easel.html"});
    }
}

browser.runtime.onMessage.addListener(openEasel);