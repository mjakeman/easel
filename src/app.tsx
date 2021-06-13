import { Course } from "./shared"
import { browser } from "webextension-polyfill-ts";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Frame } from "./components/Frame";

function render(course: Course|null) {
    ReactDOM.render(
        <Frame course={course}/>,
        document.getElementById("easel-app")
    );
}

let course: Course|null = null;
try {
    browser.storage.local.get("courseData").then((val: any) => {
        course = JSON.parse(val.courseData); 
        render(course);
    }).catch(() => { throw Error; });
} catch (e) {
    console.error(`Could not get course: ${e}`);
    render(null);
}

