import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { RouteComponentProps } from "react-router";

import { updateTodo } from "$modules/todos/action";
import IState from "$types/state";
import { ITodo } from "$types/todo";
import UpdateTodoForm from "../components/UpdateTodoForm";

interface IParam {
    id: string;
}

interface IProps extends RouteComponentProps<IParam> {
    
}

const mapStateToProps = (state: IState, props: IProps) => {
    return {
        todo: state.todoReducer.todos.find((todo: ITodo) => {
            return todo.id === parseInt(props.match.params.id);
        })
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        updateTodo: (id: number, text: string) => {
            dispatch(updateTodo({
                id: id,
                text: text
            }))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTodoForm)