import { browser } from "webextension-polyfill-ts";
import {Course, Recording, OpenMessage, MessageType} from "./shared";

let hasInit = false;

document.body.style.border = "2px solid #53FEBE";

let btnContainer = document.getElementById("toggleViewButton")?.parentElement;
if (btnContainer == null) {
    throw new Error("Could not find button container!");
}
let btn = document.createElement("button");
btn.innerText = "Open with Easel";
btnContainer.appendChild(btn);
btn.style.border = "1px solid #53FEBE";
btn.style.borderBottom = "3px solid #53FEBE";
btn.style.backgroundColor = "#B3FFE3";
btn.style.borderRadius = "4px";
btn.style.padding = "5px";
btn.style.cursor = "pointer";
btn.onclick = function() {    

    // Do web scraping and load
    let course: Course = {
        name: "My Course",
        courseUrl: btn.baseURI,
        lectures: []
    };

    let elements = document.getElementsByTagName("tr");
    for (let i = 0; i < elements.length; i++) {
        let lecture = elements[i] as HTMLTableRowElement;

        let titleAnchor = lecture.querySelector(".preview-recording")! as HTMLAnchorElement;
        if (titleAnchor === null)
            continue;

        let title = titleAnchor.innerText;
        let url = titleAnchor.href;

        // Replace mediastore URLs with mediaplayer
        if (url.includes("mediastore")) {
            url = url.replace("mediastore", "mediaplayer");
        }

        let lectureInfo = lecture.querySelectorAll("td");
        if (lectureInfo === null)
            continue;

        let dateTime = lectureInfo[1].innerText;
        let building = lectureInfo[2].innerText;
        let section = lectureInfo[3].innerText;

        let recording: Recording = {
            title,
            dateTime,
            building,
            section,
            url
        }
        
        course.lectures.push(recording);
    }

    // confirm("Would you like to view this course in Easel?"))
    let msg: OpenMessage = {
        type: MessageType.OPEN,
        course: course
    };
    browser.runtime.sendMessage(msg);
}

// document.arrive("#recordings", function () {
    
// })