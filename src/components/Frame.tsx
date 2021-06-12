import * as React from "react";
import Style from "../../css/Easel.module.css";
import { HelloWorld } from "./HelloWorld";
import { Video } from "./Video";

export class Frame extends React.Component<{}> {
    render() {
        return <div className={Style.Frame}>
            <HelloWorld helloMsg="Welcome to Easel" />
            <Video />
        </div>;
    }
}