import {Course, Recording, Message, MessageType} from "./shared";

function initEasel() {
    alert("Initialising");

    let course: Course;
    try {
        course = JSON.parse(localStorage.sharedData);
    } catch (e) {
        console.error("Failed to start Easel! Aborting");
        return;
    }
    delete localStorage.sharedData;

    for (let i = 0; i < course.lectures.length; i++) {
        let p = document.createElement("p");
        p.innerText = course.lectures[i].url;
        document.append(p)
        document.append(document.createElement("br"));
    }
}

initEasel();