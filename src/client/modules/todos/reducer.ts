import { ITodoState, AddTodoAction } from "./types";

const initState = (): ITodoState => {
    return {
        todos: []
    };
};

export const todoReducer = (state: ITodoState = initState(), action: AddTodoAction): ITodoState => {
    switch (action.type) {

        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length,
                        text: action.payload.text,
                    },
                ]
            }

    }
}