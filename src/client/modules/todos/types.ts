// payload types
export type AddTodoPayload = {
    text: string;
};

export type DeleteTodoPayload = {
    id: number;
}


// action types
export type AddTodoAction = {
    type: "ADD_TODO";
    payload: AddTodoPayload;
};

export type DeleteTodoAction = {
    type: "DELETE_TODO";
    payload: DeleteTodoPayload;
}


// state types
export interface ITodo {
    id: number;
    text: string;
}

export interface ITodoState {
    todos: ITodo[],
};