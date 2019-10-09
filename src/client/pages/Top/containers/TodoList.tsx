import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { deleteTodo } from "../../../modules/todos/action";

import { IState } from "../../../modules/todos/types";

import TodoList from "../components/TodoList";

const mapStateToProps = (state: IState) => {
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        deleteTodo: (id: number) => dispatch(deleteTodo({ id: id }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)