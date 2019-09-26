import { AddTodoPayload } from "./types";

export const addTodo = (payload: AddTodoPayload) => {
    return {
        type: "ADD_TODO",
        payload
    }
}