import * as React from "react";

import AddTodoForm from "../containers/AddTodoForm";
import TodoList from "../containers/TodoList";

export default () => {
    return (
        <div>
            <AddTodoForm />
            <TodoList />
        </div>
    );
};