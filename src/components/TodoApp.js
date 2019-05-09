import React from 'react';
import TodoHeaderContainer from './TodoHeaderContainer'
import CreateTodoFieldContainer from './CreateTodoFieldContainer'
import TodoListContainer from './TodoListContainer'
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
                <TodoHeaderContainer />
                <CreateTodoFieldContainer />
                <TodoListContainer />
            </div>
        );
    }
}
export default TodoApp;