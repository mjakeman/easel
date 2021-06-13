import * as React from "react";
import Style from "../../css/Easel.module.css";

export interface HeaderProps {
    courseName: string|undefined
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        let courseText = (this.props.courseName !== undefined)
            ? "(" + this.props.courseName + ")"
            : "";
        return <h1 className={Style.Header}>Easel - Lecture Recording Manager {courseText}</h1>;
    }
}