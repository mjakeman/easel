import { Course } from "../shared";

import * as React from "react";
import Style from "../../css/Easel.module.css";
import { Header } from "./Header";
import { Video } from "./Video";
import { Sidebar } from "./Sidebar";

export interface FrameProps {
    course: Course|null
}

export class Frame extends React.Component<FrameProps, {}> {
    render() {
        return <div className={Style.Frame}>
            <Header courseName={this.props.course?.name} />
            <div className={Style.Container}>
                <Sidebar course={this.props.course} />
                <Video />
            </div>
        </div>;
    }
}