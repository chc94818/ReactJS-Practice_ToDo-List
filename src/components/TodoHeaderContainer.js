import React from 'react';
import PropTypes from 'prop-types';
import TodoHeader from './TodoHeader';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
//React.PropTypes自React v15.5起已棄用。請使用prop-types 庫代替。

// 顯示列表標題 title
// 顯示使用者 username
// 顯示剩餘工作數 todo count
class TodoHeaderContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }
    componentDidMount() {
        TodoActions.loadTodos();
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() }))
        ;
    }

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        return(
            <TodoHeader
                title="我的待辦清單"
                username="Jason"
                todoCount={this.state.todos.filter((todo) => !todo.completed).length}
            />
        );
    }
}

//
// // 使用 propTypes 定義參數的型別
// TodoHeader.propTypes = {
//     title: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     todoCount: PropTypes.number.isRequired
// };
// // 使用 defaultProps 定義參數的預設值
// TodoHeader.defaultProps = {
//     title: '我的待辦清單',
//     username: 'Guest',
//     todoCount: 0
// };
export default TodoHeaderContainer;