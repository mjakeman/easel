type recording = {
    name: string,
    section: string,
    url: string
}

type course = {
    name: string,
    lectures: recording[]
}

let hasInit = false;

document.body.style.border = "5px solid red";

var btnContainer = document.getElementById("toggleViewButton")?.parentElement;
if (btnContainer == null) {
    throw new Error("Could not find button container!");
}
var btn = document.createElement("button");
btn.innerText = "Open with Easel";
btnContainer.appendChild(btn);
btn.onclick = function() {    

    // Do web scraping and load
    

    // confirm("Would you like to view this course in Easel?"))
    browser.runtime.sendMessage("open");
}

// document.arrive("#recordings", function () {
    
// })