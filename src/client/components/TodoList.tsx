import * as React from "react";

import { ITodo } from "../modules/todos/types";

interface IProps {
    todos: ITodo[];
    deleteTodo: (id: number) => any;
}

export default (props: IProps) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <div key={ todo.id }>
                    <li>{todo.text}</li>
                    <button onClick={ () => props.deleteTodo(todo.id) }>done</button>
                </div>
            ))}
        </ul>
    )
}