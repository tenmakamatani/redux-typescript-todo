// payload types
export type AddTodoPayload = {
    text: string;
};

// action types
export type AddTodoAction = {
    type: "ADD_TODO";
    payload: AddTodoPayload;
};

// state types
export interface ITodo {
    id: number;
    text: string;
}

export interface ITodoState {
    todos: ITodo[],
};