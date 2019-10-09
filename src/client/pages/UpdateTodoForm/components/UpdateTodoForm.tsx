import * as React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

import { ITodo } from "types/todo";

interface IProps {
    todo: ITodo;
    updateTodo: (id: number, text: string) => any;
}

export default (props: IProps) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" onChange={ (e) => setValue(e.currentTarget.value) } value={ value }/>
            <button onClick={ () => {
                props.updateTodo(props.todo.id, value);
                setValue("");
                <Redirect to="/"></Redirect>
            } }>Update</button>
        </div>
    )
}