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

    // did mount 階段註冊 listener
    componentDidMount() {
        // 發出 loadTodos 請求以 ajax 獲取表單資料
        TodoActions.loadTodos();
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() })
        );
    }

    // will unmount 階段註銷 listener
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