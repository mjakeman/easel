import "arrive";

let init = false;

type Context = {
    container: HTMLDivElement,
    videoplayer: HTMLVideoElement
};

function context_create(videoplayer: HTMLVideoElement): Context {
    // Create container
    const container = document.createElement("div");
    container.className = "video-container";    
    document.body.appendChild(container)
    
    return {
        container,
        videoplayer
    };
}

function context_add(cx: Context, el: HTMLElement) {
    cx.container.appendChild(el);
}

function create_shortcut(cx: Context, label: string, time: number): HTMLButtonElement {
    let button = document.createElement("button");
    button.innerHTML = label;
    button.onclick = function () {
        cx.videoplayer.currentTime = time;
    };
    return button;
}

function create_shortcut_expression(cx: Context, label: string, time: (current: number, duration: number) => number): HTMLButtonElement {
    let button = document.createElement("button");
    button.innerHTML = label;
    button.onclick = function () {
        let currentTime = cx.videoplayer.currentTime;
        let totalLength = cx.videoplayer.duration;
        cx.videoplayer.currentTime = time(currentTime, totalLength);
    };
    return button;
}

function load() {
    
    if (init) return;
    init = true;

    console.log("Hello!");

    // Get video player
    const videoplayer = document.getElementById("video") as HTMLVideoElement;
    if (videoplayer === null) {
        console.error("Video not found!");
        return;
    }

    // Create our container (context object)
    let cx = context_create(videoplayer);

    // Setup Nav
    let nav = document.createElement("nav");
    nav.id = "video-enhance-nav";
    nav.innerHTML = "<p>Easel - Video Enhancer for Canvas</p><p class='credit'>Created by <a href='https://www.mattjakeman.com' target='_blank'>Matt Jakeman</a></p>";
    context_add(cx, nav);

    // Setup Video
    videoplayer.controls = true;
    context_add(cx, videoplayer);

    // Setup Shortcuts
    let s1 = create_shortcut(cx, "Skip Copyright Message (42s)", 42);
    context_add(cx, s1);

    let s2 = create_shortcut(cx, "First 5 Minutes", 5*60);
    context_add(cx, s2);

    let s3 = create_shortcut_expression(cx, "Halfway", function (cur, len) { return len/2; });
    context_add(cx, s3);

    let s4 = create_shortcut_expression(cx, "Last 5 Minutes", function (cur, len) { return len - (5*60); });
    context_add(cx, s4);

    let s5 = create_shortcut_expression(cx, "-10s", function (cur, len) { return cur - 10; });
    context_add(cx, s5);

    let s6 = create_shortcut_expression(cx, "+30s", function (cur, len) { return cur + 30; });
    context_add(cx, s6);

    // TODO: GIT COMMIT FIRST
    
}

document.arrive("video", load);