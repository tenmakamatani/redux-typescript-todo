import { ITodoState, Actions } from "./types";

const initState = (): ITodoState => {
    return {
        todos: []
    };
};

export const todoReducer = (state: ITodoState = initState(), action: Actions): ITodoState => {
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
        
        case "DELETE_TODO":
            return {
                todos: state.todos.filter(
                    todo => todo.id != action.payload.id
                )
            }
        
        default:
            return state;

    }
}