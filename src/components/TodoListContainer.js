import React from 'react';
import TodoList from './TodoList';
import TodoActions from "../actions/TodoActions";
import {connect } from 'react-redux';
class TodoListContainer extends React.Component {

    render() {
        const {
            todos,
            updateTodo,
            toggleTodo,
            deleteTodo
        } = this.props;
        return (

            <TodoList
                todos={todos}
                onUpdateTodo={updateTodo}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
            />
        );
    }
}
TodoListContainer = connect(
    (state) => ({ todos: state.todos }),
    {
        updateTodo: TodoActions.updateTodo,
        toggleTodo: TodoActions.toggleTodo,
        deleteTodo: TodoActions.deleteTodo
    }
)(TodoListContainer);
export default TodoListContainer;
