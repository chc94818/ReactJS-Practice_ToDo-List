import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// 不可控元件 : 有自己的 state，無法預期它的結果
// 由於 InputField 中不需要與其他元件的狀態互動，所以用不可控元件就好
// 作為更新或新增 list 時，輸入其 title 用
const Input = styled.input`
            display: block;                
            margin: auto;     
            text-align : center;
            font-size : 2em;
            border-radius : 0.3em;
        `;

class InputField extends React.Component {
    constructor(props) {
        super(props);
        // 讓上層元件傳遞的 value，初始元件狀態
        this.state = { value: props.value || '' };
        // 向下傳遞函式要先綁定
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    // handleChange 用來傾聽 input onChange 事件，將使用者輸入的資料更新到元件狀態中
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleKeyDown(e){
        const{
            onKeyDown,
            onSubmitEditing
        } = this.props;
        const { value } = this.state;
        switch (e.keyCode) {
            case 13:
                // 如果使用者沒有鍵入任何值（包括都是空白），則不會呼叫 callback
                // trim() 去除字串的前後空白
                if (value.trim()) {
                    onSubmitEditing && onSubmitEditing(value);
                }
                // 將輸入框資料清空
                this.setState({value: ''});
                break;
            default:
                break;
        }
        // 4. 如果上層元件傳遞 onKeyDown callback，我們必須觸發它
        onKeyDown && onKeyDown(e);
    }



    render() {

        return(
            <Input
                {...this.props}
                type="text"
                value={this.state.value}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange}
            />
        );
    }
}
// 使用 propTypes 定義參數的型別
InputField.propTypes = {
    onSubmitEditing: PropTypes.func,
    //placeholder: PropTypes.string.isRequired,
};
// 使用 defaultProps 定義參數的預設值
InputField.defaultProps = {
    //placeholder: 'New Task',
};
export default InputField;