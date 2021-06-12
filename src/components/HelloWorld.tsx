import * as React from "react";
import Style from "../../css/Easel.module.css";

export interface HelloWorldProps {
    helloMsg: string
}

// 'HelloWorldProps' describes our props structure.

// For the state, we use the '{}' type.

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
    render() {
        return <h1 className={Style.HelloWorld}>Hi there from React! {this.props.helloMsg}!</h1>;
    }
}