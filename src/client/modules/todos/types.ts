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
export interface ITodoState {
    todos: {
        id: number;
        text: string;
    }[],
};