import {Course, Recording, OpenMessage, MessageType} from "./shared";

const useSessionStorage = false;

function printElement(text: string) {
    let p = document.createElement("p");
    p.innerText = text;
    document.body.append(p)
    document.body.append(document.createElement("br"));
}

function addToSidebar(sidebar: HTMLElement, recording: Recording) {
    let template = document.createElement("template");
    let sidebarHtml = `<a class="sidebar-item" target="video-frame" href=${recording.url}>${recording.title}</a>`.trim();
    template.innerHTML = sidebarHtml;
    let anchor = template.content.firstChild as HTMLAnchorElement;
    if (anchor != null) {
        sidebar.appendChild(anchor);
        anchor.onclick = function () {
            // Remove style from previously selected element
            let prevSelected = document.getElementsByClassName("selected");
            for (let i = 0; i < prevSelected.length; i++) {
                prevSelected[i].classList.remove("selected");
            }

            // Add to the clicked-on element
            anchor.classList.add("selected");
        };
    }
    
}

function retrieveCourseData(): Course|null {
    
    const key = "courseData";

    // This override lets us keep data permanently (nice for development)
    // It's problematic though as it means we can't have multiple easel
    // instances open :/
    if (!useSessionStorage) {
        try {
            // Try parse course data.
            let course: Course = JSON.parse(localStorage.courseData);
            return course;
        } catch (e) {
            return null;
        }
    }

    // First check local storage. This is populated by
    // background.ts when it loads easel.
    try {
        // Try parse course data. If sucessful, store in sessionData for later use.
        let course: Course = JSON.parse(localStorage.courseData);
        sessionStorage.setItem(key, localStorage.courseData);
        return course;
    } catch (e) {
        console.log("Course not in local storage -> Checking session storage instead");
    } finally {
        // Clear local storage regardless of result
        delete localStorage.courseData;
    }

    // Next check session storage. We store course data here
    // so it can survive page reloads.
    try {
        let courseStr = sessionStorage.getItem(key);
        let course: Course = JSON.parse(courseStr!);
        return course;
    } catch (e) {
        // Not found, return null and propagate error to caller
        return null;
    }
}

function initEasel() {
    // alert("Initialising");

    let course = retrieveCourseData();

    if (course == null) {
        console.error("Failed to start Easel! Aborting");
        printElement("Failed to start Easel! Please try reopening this page directly from Canvas's lecture recordings tab.");
        return;
    }

    const elementSidebar = document.getElementById("sidebar")!;

    for (let i = 0; i < course.lectures.length; i++) {
        // printElement(course.lectures[i].url);
        addToSidebar(elementSidebar, course.lectures[i]);
    }
}

// Start easel once the document has loaded
window.onload = () => initEasel();