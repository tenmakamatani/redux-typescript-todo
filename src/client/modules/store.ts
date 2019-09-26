import { createStore } from "redux";

import { todoReducer } from "./todos/reducer";

export const store = createStore(todoReducer);