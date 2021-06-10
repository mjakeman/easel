function openEasel() {
    browser.tabs.create({
        "url": "/easel.html"
    });
}

browser.runtime.onMessage.addListener(openEasel);