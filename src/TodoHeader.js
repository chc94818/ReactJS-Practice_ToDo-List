import React from 'react';
import PropTypes from 'prop-types';
//React.PropTypes自React v15.5起已棄用。請使用prop-types 庫代替。

// 顯示列表標題 title
// 顯示使用者 username
// 顯示剩餘工作數 todo count
class TodoHeader extends React.Component {

    render() {
        const{title, username, todoCount} = this.props;
        return(
            <div>
                <h1>{title}</h1>
                <h2>Hello {username}</h2>
                <h2>{todoCount} tasks left</h2>

            </div>
        );
    }
}


// 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    todoCount: PropTypes.number.isRequired
};
// 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
    title: '我的待辦清單',
    username: 'Guest',
    todoCount: 0
};
export default TodoHeader;