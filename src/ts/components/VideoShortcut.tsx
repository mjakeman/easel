import {Course, Recording} from "../shared";

import * as React from "react";
import Style from "../../css/Easel.module.css";

export type CalcTimeFunction = (current: number, duration: number) => number;

export interface VideoShortcutProps {
    expression: CalcTimeFunction,
    label: string
}

export class VideoShortcut extends React.Component<VideoShortcutProps, {}> {
    constructor(props: VideoShortcutProps) {
        super(props);
        this.updateVideo = this.updateVideo.bind(this);
    }
    
    render() {
        return <button onClick={this.updateVideo} className={Style.VideoShortcut}>{this.props.label}</button>
    }

    updateVideo(e: React.SyntheticEvent) {
        let video = document.getElementById("video") as HTMLVideoElement;
        let newTime = this.props.expression(video.currentTime, video.duration);
        video.currentTime = newTime;
    }
}