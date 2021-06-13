import {Course, Recording} from "../shared";

import * as React from "react";
import { SidebarItem } from "./SidebarItem";
import Style from "../../css/Easel.module.css";

export interface SidebarProps {
    course: Course|null,
}

export class Sidebar extends React.Component<SidebarProps, {}> {
    static getDerivedStateFromError(error: React.ErrorInfo) {
        return { hasError: true };
    }

    render() {
        try {
            var recordings = this.props.course!.lectures;

            const items = []

            for (let i = 0; i < recordings.length; i++) {
                items.push(<SidebarItem key={i} recording={recordings[i]}/>);
            }
            return <div className={Style.Sidebar}>
                <h2>This Course</h2>
                {items}
            </div>
        } catch (e)
        {
            return <div className={Style.Sidebar}>
                <h2>This Course</h2>
                <p className={Style.SidebarMessage}>There is no course loaded. Click "Open in Easel" on the Canvas Lecture Recordings page to access all your lectures at once.</p>
            </div>;
        }
    }
}