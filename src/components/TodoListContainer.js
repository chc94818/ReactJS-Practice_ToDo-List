import React from 'react';
import TodoList from './TodoList';
import TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

class TodoListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }
    componentDidMount() {
        TodoActions.loadTodos();
        this.removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({todos: TodoStore.getAll()})
        )
    }

    componentWillUnmount() {
        this.removeChangeListener();
    }

    render() {
        return(
            <TodoList
                todos={this.state.todos}
                onUpdateTodo={TodoActions.updateTodo}
                onToggleTodo={TodoActions.toggleTodo}
                onDeleteTodo={TodoActions.deleteTodo}
            />
        );
    }
}

export default TodoListContainer;
