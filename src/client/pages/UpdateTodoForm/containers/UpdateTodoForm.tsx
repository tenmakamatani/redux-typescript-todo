import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { RouteComponentProps } from "react-router";

import { updateTodo } from "../../../modules/todos/action";
import { ITodoState } from "../../../types/todo";
import UpdateTodoForm from "../components/UpdateTodoForm";

interface IParam {
    id: string;
}

interface IProps extends RouteComponentProps<IParam> {
    
}

const mapStateToProps = (state: ITodoState, props: IProps) => {
    console.log(props);
    return {
        todo: state.todos.find((todo) => {
            return todo.id === parseInt(props.match.params.id)
        })
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        updateTodo: (id: number, text: string) => dispatch(updateTodo({
            id: id,
            text: text
        }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTodoForm)