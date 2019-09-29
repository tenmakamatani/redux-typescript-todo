import { connect } from "react-redux";

import { ITodoState } from "../modules/todos/types";

import TodoList from "../components/TodoList";

const mapStateToProps = (state: ITodoState) => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps
)(TodoList)