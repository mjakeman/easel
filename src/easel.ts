import {Course, Recording, Message, MessageType} from "./shared";

function printElement(text: string) {
    let p = document.createElement("p");
    p.innerText = text;
    document.body.append(p)
    document.body.append(document.createElement("br"));
}

function initEasel() {
    // alert("Initialising");

    let course: Course;
    try {
        course = JSON.parse(localStorage.sharedData);
    } catch (e) {
        console.error("Failed to start Easel! Aborting");
        printElement("Failed to start Easel! Make sure you access this page directly from Canvas");
        return;
    }
    delete localStorage.sharedData;

    for (let i = 0; i < course.lectures.length; i++) {
        printElement(course.lectures[i].url);
    }
}

// Start easel once the document has loaded
window.onload = () => initEasel();