import * as React from "react";
import Style from "../../css/Easel.module.css";
import { VideoShortcut, CalcTimeFunction } from "./VideoShortcut";
import { VideoPlayer } from "./VideoPlayer";

export class Video extends React.Component<{}, {}> {
    render() {

        const shortcuts = [];
        shortcuts.push(<VideoShortcut key="s1" label="Skip Copyright Message (42s)" expression={(t, d) => 42 }/>);
        shortcuts.push(<VideoShortcut key="s2" label="First 5 Minutes" expression={(t, d) => 5*60 }/>);
        shortcuts.push(<VideoShortcut key="s3" label="Halfway" expression={(t, d) => d/2 }/>);
        shortcuts.push(<VideoShortcut key="s4" label="Last 5 Minutes" expression={(t, d) => d - (5*60) }/>);
        shortcuts.push(<VideoShortcut key="s5" label="-10s" expression={(t, d) => t-10 }/>);
        shortcuts.push(<VideoShortcut key="s6" label="+30s" expression={(t, d) => t+30 }/>);

        return <div className={Style.VideoContainer}>
            <VideoPlayer />
            <div className={Style.VideoShortcutBox}>
                {shortcuts}
            </div>
        </div>;
    }
}