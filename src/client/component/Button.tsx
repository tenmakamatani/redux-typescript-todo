"use strict";

import * as React from "react";

interface IProps {
    onClick: () => void;
}

interface IState {

}

export default class Button extends React.Component<IProps, IState> {
    render() {
        return (
            <button onClick={ this.props.onClick }>
                更新
            </button>
        );
    }
}