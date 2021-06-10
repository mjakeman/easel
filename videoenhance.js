"use strict";
var init = false;
function context_create(videoplayer) {
    // Create container
    var container = document.createElement("div");
    container.className = "video-container";
    document.body.appendChild(container);
    return {
        container: container,
        videoplayer: videoplayer
    };
}
function context_add(cx, el) {
    cx.container.appendChild(el);
}
function create_shortcut(cx, label, time) {
    var button = document.createElement("button");
    button.innerHTML = label;
    button.onclick = function () {
        cx.videoplayer.currentTime = time;
    };
    return button;
}
function create_shortcut_expression(cx, label, time) {
    var button = document.createElement("button");
    button.innerHTML = label;
    button.onclick = function () {
        var currentTime = cx.videoplayer.currentTime;
        var totalLength = cx.videoplayer.duration;
        cx.videoplayer.currentTime = time(currentTime, totalLength);
    };
    return button;
}
function load() {
    if (init)
        return;
    init = true;
    console.log("Hello!");
    // Get video player
    var videoplayer = document.getElementById("video");
    if (videoplayer === null) {
        console.error("Video not found!");
        return;
    }
    // Create our container (context object)
    var cx = context_create(videoplayer);
    // Setup Nav
    var nav = document.createElement("nav");
    nav.innerHTML = "<p>Easel - Video Enhancer for Canvas</p><p class='credit'>Created by <a href='https://www.mattjakeman.com' target='_blank'>Matt Jakeman</a></p>";
    context_add(cx, nav);
    // Setup Video
    videoplayer.controls = true;
    context_add(cx, videoplayer);
    // Setup Shortcuts
    var s1 = create_shortcut(cx, "Skip Copyright Message (42s)", 42);
    context_add(cx, s1);
    var s2 = create_shortcut(cx, "First 5 Minutes", 5 * 60);
    context_add(cx, s2);
    var s3 = create_shortcut_expression(cx, "Halfway", function (cur, len) { return len / 2; });
    context_add(cx, s3);
    var s4 = create_shortcut_expression(cx, "Last 5 Minutes", function (cur, len) { return len - (5 * 60); });
    context_add(cx, s4);
    var s5 = create_shortcut_expression(cx, "-10s", function (cur, len) { return cur - 10; });
    context_add(cx, s5);
    var s6 = create_shortcut_expression(cx, "+30s", function (cur, len) { return cur + 30; });
    context_add(cx, s6);
    // TODO: GIT COMMIT FIRST
}
document.arrive("video", load);
//# sourceMappingURL=videoenhance.js.map