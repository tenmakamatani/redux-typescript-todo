import {
    AddTodoPayload, AddTodoAction,
    DeleteTodoPayload, DeleteTodoAction,
    UpdateTodoPayload, UpdateTodoAction
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

export const updateTodo = (payload: UpdateTodoPayload): UpdateTodoAction => {
    return {
        type: "UPDATE_TODO",
        payload
    }
}