import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History, createBrowserHistory } from "history";

import { todoReducer } from "./reducer";

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    todoReducer
});

export const history: History = createBrowserHistory();

export const store: Store = createStore(
    createRootReducer(history),
    applyMiddleware(
        routerMiddleware(history)
    )
);