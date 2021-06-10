"use strict";
var hasInit = false;
document.body.style.border = "5px solid red";
document.arrive("#recordings", function () {
    var _a;
    if (!hasInit) {
        hasInit = true;
        var btnContainer = (_a = document.getElementById("toggleViewButton")) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (btnContainer == null) {
            throw new Error("Could not find button container!");
        }
        var btn = document.createElement("button");
        btn.innerText = "Open with Easel";
        btnContainer.appendChild(btn);
        btn.onclick = function () {
            if (confirm("Would you like to view this course in Easel?")) {
                // Do web scraping and load
                alert("Loading!");
            }
        };
    }
});
//# sourceMappingURL=course.js.map