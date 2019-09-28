import { connect } from "react-redux";
import Root from "../components/Root";
import { Dispatch, Action } from "redux";
import { ITodoState } from "../modules/todos/types";
import { addTodo } from "../modules/todos/action";

const mapStateToProps = (state: ITodoState) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        addTodo: (text: string) => dispatch(addTodo({ text: text }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Root);