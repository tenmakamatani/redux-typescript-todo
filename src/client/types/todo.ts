// payload types
export type AddTodoPayload = {
    text: string;
}

export type DeleteTodoPayload = {
    id: number;
}

export type UpdateTodoPayload = {
    id: number;
    text: string;
}

// action types
export type AddTodoAction = {
    type: "ADD_TODO";
    payload: AddTodoPayload;
}

export type DeleteTodoAction = {
    type: "DELETE_TODO";
    payload: DeleteTodoPayload;
}

export type UpdateTodoAction = {
    type: "UPDATE_TODO";
    payload: UpdateTodoPayload;
}

export type Actions = AddTodoAction | DeleteTodoAction | UpdateTodoAction;


// state types
export interface ITodo {
    id: number;
    text: string;
}

export interface ITodoState {
    todos: ITodo[],
}
