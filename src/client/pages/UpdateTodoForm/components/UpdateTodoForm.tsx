import * as React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";

import { ITodo } from "$types/todo";

interface IProps extends RouteComponentProps {
    todo: ITodo;
    updateTodo: (id: number, text: string) => any;
}

export default (props: IProps) => {
    if (!props.todo) {
        props.history.push("/");
    }
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" onChange={ (e) => setValue(e.currentTarget.value) } value={ value }/>
            <button onClick={ () => {
                props.updateTodo(props.todo.id, value);
                setValue("");
                props.history.push("/");
            } }>Update</button>
        </div>
    )
}