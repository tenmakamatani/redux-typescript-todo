import * as React from "react";

import { ITodo } from "../modules/todos/types";

interface IProps {
    todos: ITodo[];
}

export default (props: IProps) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <li key={ todo.id }>{todo.text}</li>
            ))}
        </ul>
    )
}