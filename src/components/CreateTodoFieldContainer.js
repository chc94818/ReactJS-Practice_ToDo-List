import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import TodoActions from "../actions/TodoActions";
// 不可控元件 : 有自己的 state，無法預期它的結果
// 由於 InputField 中不需要與其他元件的狀態互動，所以用不可控元件就好
// 作為更新或新增 list 時，輸入其 title 用
class CreateTodoFieldContainer extends React.Component {
    render() {
        return(
            <InputField
                placeholder="新增待辦清單"
                onSubmitEditing={TodoActions.createTodo}
            />
        );
    }
}
export default CreateTodoFieldContainer;