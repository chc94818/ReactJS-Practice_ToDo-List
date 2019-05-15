import React from 'react';
import InputField from './InputField';
import TodoActions from "../actions/TodoActions";
import {connect } from 'react-redux';
// 不可控元件 : 有自己的 state，無法預期它的結果
// 由於 InputField 中不需要與其他元件的狀態互動，所以用不可控元件就好
// 作為更新或新增 list 時，輸入其 title 用
class CreateTodoFieldContainer extends React.Component {
    render() {
        return(
            <div style={{margin:'auto'}}>
            <InputField
                //placeholder="新增待辦清單"
                onSubmitEditing={this.props.createTodo}
            />
            </div>

        );
    }
}
CreateTodoFieldContainer = connect(undefined, {
    createTodo: TodoActions.createTodo
})(CreateTodoFieldContainer);
export default CreateTodoFieldContainer;