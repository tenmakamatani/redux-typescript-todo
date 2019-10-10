import * as React from "react";
import { useState } from "react";
import { Dispatch, Action } from "redux";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import IState from "$types/state";
import { updateTodo } from "$modules/todos/action";

interface IParam {
    id: string;
}

interface IProps extends RouteComponentProps<IParam> {

}

export default (props: IProps) => {
    // Get todo from URL params.
    const todo = useSelector((state: IState) => {
        return state.todoReducer.todos.find((todo) => {
            return todo.id === parseInt(props.match.params.id);
        });
    });
    if (todo == null) {
        props.history.push("/");
    }

    // Use dispatch function.
    const dispatch: Dispatch<Action> = useDispatch();

    const [value, setValue] = useState(todo!.text);
    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.currentTarget.value)} value={value} />
            <button onClick={() => {
                dispatch(updateTodo({
                    id: todo!.id,
                    text: value
                }));
                setValue("");
                props.history.push("/");
            }}>Update</button>
        </div>
    )
}