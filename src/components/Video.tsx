import * as React from "react";
import { findDOMNode } from "react-dom";
import Style from "../../css/Easel.module.css";

export class Video extends React.Component<{}> {
    componentDidMount() {
        // Try reparent video
        const videoplayer = document.getElementById("video") as HTMLVideoElement;
        if (videoplayer !== null) {
            console.log("Found video player - Reparenting");

            const container = findDOMNode(this)!;
            container.appendChild(videoplayer);
        }
    }

    render() {
        return <div />;
    }
}