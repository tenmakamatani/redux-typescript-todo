import { ITodoState, ITodo, Actions } from "./types";

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
                        id: state.todos.length + 1,
                        text: action.payload.text,
                    },
                ]
            }
        
        case "DELETE_TODO":
            const todos: ITodo[] = [];
            let id: number = 1;
            state.todos.forEach((todo: ITodo) => {
                if (todo.id == action.payload.id) return;
                todos.push({
                    id: id,
                    text: todo.text
                });
                id++;
            });
            return {
                todos: todos
            }
        
        case "UPDATE_TODO":
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id == action.payload.id) {
                        return {
                            id: todo.id,
                            text: action.payload.text
                        }
                    }
                    return todo;
                })
            }
        
        default:
            return state;

    }
}