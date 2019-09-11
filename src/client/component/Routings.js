"use strict";

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Routings extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/friends">Friends</Link></li>
                    </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/friends" component={Friends}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to ようこそ</p>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <p>フレンズに投票するページです</p>
        </div>
    )
}

const Friends = () => {
    return (
        <div>
            <h2>Friends</h2>
            <p>ここにフレンズのリストを書きます</p>
        </div>
    )
}

export default Routings;