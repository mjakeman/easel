import { Course, Recording, OpenMessage, InitMessage, MessageType } from "./shared";
import { browser, Runtime } from "webextension-polyfill-ts";

function openEasel(message: (OpenMessage|InitMessage), sender: Runtime.MessageSender) {
    if (message.type === MessageType.OPEN) {
        localStorage.courseData = JSON.stringify((message as OpenMessage).course);
        browser.tabs.create({ "url": "/html/easel.html" });
    } else if (message.type === MessageType.INIT) {
        if (sender.tab?.id !== null) {
            inject(sender.tab?.id!);
        }
    }
}

browser.runtime.onMessage.addListener((message, sender) => openEasel(message, sender));

// Match and Inject React App
function inject(tabId: number) {
        
    browser.tabs.executeScript(tabId, {
        code: `console.log("Attempting to inject React into the webpage");`
    });

    // Inject React Script
    browser.tabs.executeScript(
        tabId, { file: '/dist/inject.js' }
    ).then(() => {
        // Execute React App
        browser.tabs.executeScript(
            tabId, { file: '/dist/reactapp.js' }
        ).then(() => console.log(`Injected React into Tab #${tabId}`));
    });
}