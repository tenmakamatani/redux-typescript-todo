import {
    AddTodoPayload, AddTodoAction,
    DeleteTodoPayload, DeleteTodoAction
} from "./types";

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
    return {
        type: "ADD_TODO",
        payload
    }
}

export const deleteTodo = (payload: DeleteTodoPayload): DeleteTodoAction => {
    return {
        type: "DELETE_TODO",
        payload
    }
}