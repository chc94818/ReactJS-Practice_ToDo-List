import React from 'react';
import TodoHeaderContainer from './TodoHeaderContainer'
import CreateTodoFieldContainer from './CreateTodoFieldContainer'
import TodoListContainer from './TodoListContainer'
import TodoActions from '../actions/TodoActions';
import {connect } from 'react-redux';

class TodoApp extends React.Component {
    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        return (
            <div>
                <TodoHeaderContainer />
                <CreateTodoFieldContainer />
                <TodoListContainer />
            </div>
        );
    }
}
TodoApp = connect(undefined, {
    loadTodos: TodoActions.loadTodos
})(TodoApp);
export default TodoApp;