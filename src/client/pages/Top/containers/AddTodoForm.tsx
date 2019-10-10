import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { addTodo } from "$modules/todos/action";

import IState from "$types/state";

import AddTodoForm from "../components/AddTodoForm";

const mapStateToProps = (state: IState) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        addTodo: (text: string) => dispatch(addTodo({ text: text }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);