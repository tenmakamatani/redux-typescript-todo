import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import Top from "./pages/Top";
import UpdateTodoForm from "./pages/UpdateTodoForm/index";
import { store, history } from "$modules/todos/store";

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route exact path="/" component={ Top } />
                <Route path="/todos/:id" component={ UpdateTodoForm } />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
)