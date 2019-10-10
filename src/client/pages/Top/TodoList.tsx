import * as React from "react";
import { Dispatch, Action } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTodo } from "$modules/todos/action";
import IState from "$types/state";
import { ITodo } from "$types/todo";

export default () => {
    // Get all todos.
    const todos: ITodo[] = useSelector((state: IState) => {
        return state.todoReducer.todos;
    })
    console.log(todos);

    // Use dispatch function.
    const dispatch: Dispatch<Action> = useDispatch();

    return (
        <ul>
            {todos.map((todo: ITodo) => {
                return (
                    <div key={todo.id}>
                        <li>{todo.text}</li>
                        <button onClick={() => dispatch(deleteTodo({
                            id: todo.id
                        }))}>done</button>
                        <Link to={"/todos/" + String(todo.id)}>update</Link>
                    </div>
                )
            })}
        </ul>
    )
}
