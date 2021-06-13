import { Course, Recording, OpenMessage, InitMessage, MessageType } from "./shared";
import { browser, Runtime, Tabs } from "webextension-polyfill-ts";

function openEasel(message: (OpenMessage|InitMessage), sender: Runtime.MessageSender) {
    if (message.type === MessageType.OPEN) {
        // Open
        try {
            let msg = (message as OpenMessage);

            browser.storage.local.set({courseData: JSON.stringify(msg.course)}).then(() => {
                
                // Create new tab once data is set
                browser.tabs.create({ "url": msg.course.lectures[0].url }).catch(() => { throw Error; });
            }).catch(() => { console.error("Could not set data"); throw Error; });
        }
        catch (e) {
            browser.tabs.create({ "url": "html/error.html" });
        }

    } else if (message.type === MessageType.INIT) {
        
        // Init in Tab
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