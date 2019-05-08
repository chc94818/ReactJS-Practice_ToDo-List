import React from 'react';
import TodoHeader from './TodoHeader'
import InputField from './InputField'
import TodoList from './TodoList'

// delete list item
const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) todos.splice(idx, 1);
    return todos;
};
// toggle list item is completed or not
const _toggleTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.completed = completed;
    return todos;
};
// create new list item
const _createTodo = (todos, title) => {
    todos.push({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false
    });
    return todos;
};

// update list item
const _updateTodo = (todos, id, title) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.title = title;
    return todos;
};
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 0,
                    title: 'Item 1',
                    completed: false
                },
                {
                    id: 1,
                    title: 'Item 2',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Item 3',
                    completed: false
                }
            ]
        };
    }
    updateTodosBy(updateFn) {
        return (...args) => {
            this.setState({
                todos: updateFn(this.state.todos, ...args)
            });
        };
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
                    onSubmitEditing={this.updateTodosBy(_createTodo)}
                />
                <TodoList
                    todos={todos}
                    onToggleTodo={this.updateTodosBy(_toggleTodo)}
                    onUpdateTodo={this.updateTodosBy(_updateTodo)}
                    onDeleteTodo={this.updateTodosBy(_deleteTodo)}
                />
            </div>
        );
    }
}

export default TodoApp;