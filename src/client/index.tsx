import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Top from "./pages/Top";
import UpdateTodoForm from "./pages/UpdateTodoForm/index";
import { store } from "./modules/store";

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route exact path="/" component={ Top } />
                <Route path="/todos/:id" component={ UpdateTodoForm } />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
)