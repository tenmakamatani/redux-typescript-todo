import { RouteComponentProps } from "react-router-dom";
import { ITodoState } from "./todo";

export default interface IState {
    router: RouteComponentProps;
    todoReducer: ITodoState;
}