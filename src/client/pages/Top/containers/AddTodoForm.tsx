import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { addTodo } from "../../../modules/todos/action";

import { ITodoState } from "../../../modules/todos/types";

import AddTodoForm from "../components/AddTodoForm";

const mapStateToProps = (state: ITodoState) => {
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