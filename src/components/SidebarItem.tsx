import {Course, Recording} from "../shared";

import * as React from "react";
import Style from "../../css/Easel.module.css";

export interface SidebarItemProps {
    recording: Recording,
}

export class SidebarItem extends React.Component<SidebarItemProps, {}> {
    render() {
        let recording = this.props.recording;
        return <a className={Style.SidebarItem} href={recording.url}>{recording.title}</a>
    }
}