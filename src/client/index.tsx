"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./component/Button";

interface IProps {

};

interface IState {
    count: number;
};

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        };
        this.countUp = this.countUp.bind(this);
    }
    countUp(): void {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <Button onClick={ this.countUp }></Button>
                <h1>{ this.state.count }</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("index"));