import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
//React.PropTypes自React v15.5起已棄用。請使用prop-types 庫代替。

// 顯示列表標題 title
// 顯示使用者 username
// 顯示剩餘工作數 todo count
class TodoHeader extends React.Component {

    render() {
        const HeaderDiv = styled.div`
          text-align : center;
          font-size: 1.5em;
          //margin: 1em;
          padding: 0.25em 1em;
          border-radius: 3px;
        `;
        const{todoCount} = this.props;
        return(
            <HeaderDiv>
                <h2>{todoCount>0? `${todoCount} Todos`: `Todos`}</h2>

            </HeaderDiv>
        );
    }
}


// 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
    //title: PropTypes.string.isRequired,
    //username: PropTypes.string.isRequired,
    todoCount: PropTypes.number.isRequired
};
// 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
    todoCount: 0
};
export default TodoHeader;