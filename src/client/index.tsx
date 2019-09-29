import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Root from "./components/Root";
import { store } from "./modules/store";

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>,
    document.getElementById("root")
);