import React from 'react';
import TodoHeader from './TodoHeader'
import InputField from './InputField'
import TodoList from './TodoList'
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentDidMount() {
        TodoActions.loadTodos();
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() })
        );
    }

    componentWillUnmount() {
        this._removeChangeListener();
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoHeader
                    title="我的待辦清單"
                    username="Jason"
                    todoCount={todos.filter((todo) => !todo.completed).length}
                />
                <InputField
                    placeholder="新增待辦清單"
                    onSubmitEditing={TodoActions.createTodo}
                />
                <TodoList
                    todos={todos}
                    onUpdateTodo={TodoActions.updateTodo}
                    onToggleTodo={TodoActions.toggleTodo}
                    onDeleteTodo={TodoActions.deleteTodo}
                />
            </div>
        );
    }
}
export default TodoApp;