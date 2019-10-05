import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Root from "./pages/Top/components/Top";
import { store } from "./modules/store";

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route exact path="/" component={ Root } />
        </Router>
    </Provider>,
    document.getElementById("root")
);