import React from 'react';
import TodoHeader from './TodoHeader';
import {connect} from 'react-redux';

//React.PropTypes自React v15.5起已棄用。請使用prop-types 庫代替。


// 顯示列表標題 title
// 顯示使用者 username
// 顯示剩餘工作數 todo count
class TodoHeaderContainer extends React.Component {
    render() {
        return (
            <TodoHeader
                title="我的待辦清單"
                username="Jason"
                todoCount={this.props.todos.filter((todo) => !todo.completed).size}
            />
        );
    }
}

TodoHeaderContainer = connect(
    (state) => ({ todos: state.todos })
)(TodoHeaderContainer);
export default TodoHeaderContainer;