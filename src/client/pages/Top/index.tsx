import * as React from "react";

import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export default () => {
    return (
        <div>
            <AddTodoForm />
            <TodoList />
        </div>
    )
}