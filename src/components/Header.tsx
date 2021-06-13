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
        return <header className={Style.Header}>
                <h1 className={Style.HeaderText}>Easel - Lecture Recording Manager {courseText}</h1>
                <p className={Style.HeaderCredit}>Created by <a href="https://www.mattjakeman.com/">Matt Jakeman</a></p>
            </header>;
    }
}