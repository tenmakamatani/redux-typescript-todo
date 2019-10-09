import * as React from "react";
import { useState } from "react";

interface IProps {
    addTodo: (text: string) => any;
}

export default (props: IProps) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" onChange={ (e) => setValue(e.currentTarget.value) } value={ value }/>
            <button onClick={ () => {
                props.addTodo(value);
                setValue("");
            } }>Add</button>
        </div>
    )
}