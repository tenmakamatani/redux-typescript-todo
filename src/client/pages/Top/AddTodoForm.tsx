import * as React from "react";
import { useState } from "react";
import { Dispatch, Action } from "redux";
import { useDispatch } from "react-redux";

import { addTodo } from "$modules/todos/action";

export default () => {
    // Use state for input text value.
    const [value, setValue] = useState("");

    // Use dispatch function.
    const dispatch: Dispatch<Action> = useDispatch();

    return (
        <div>
            <input type="text" onChange={ (e) => setValue(e.currentTarget.value) } value={ value }/>
            <button onClick={ () => {
                dispatch(addTodo({
                    text: value
                }));
                setValue("");
            } }>Add</button>
        </div>
    )
}
