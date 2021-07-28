import {Course, Recording} from "../shared";

import * as React from "react";
import Style from "../../css/Easel.module.css";

export interface SidebarItemProps {
    recording: Recording,
}

export class SidebarItem extends React.Component<SidebarItemProps, {}> {
    render() {
        let recording = this.props.recording;

        // Check if the target URL matches our current URL
        let isActive = (recording.url === window.location.href);

        var activeClass = isActive
            ? Style.SidebarItemActive
            : "";

        return <a className={`${Style.SidebarItem} ${activeClass}`} href={recording.url}>{recording.title}</a>
    }
}