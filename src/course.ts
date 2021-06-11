import { browser } from "webextension-polyfill-ts";
import {Course, Recording, Message, MessageType} from "./shared";

let hasInit = false;

document.body.style.border = "5px solid red";

let btnContainer = document.getElementById("toggleViewButton")?.parentElement;
if (btnContainer == null) {
    throw new Error("Could not find button container!");
}
let btn = document.createElement("button");
btn.innerText = "Open with Easel";
btnContainer.appendChild(btn);
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
    let msg: Message = {
        type: MessageType.OPEN,
        course: course
    };
    browser.runtime.sendMessage(msg);
}

// document.arrive("#recordings", function () {
    
// })