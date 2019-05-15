import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import styled from "styled-components";
const Button = styled.span`
  position: absolute;
  right: 0.5em;
  width: 1.5em;
  cursor: pointer;
  border-radius: 1.5em;
  background: #5e5e5e;
  padding: 0.2em;
  font-size: 0.8em;
  text-align: center;
  &:hover {
    background-color: #3b3b3b;
  }
`;
const CheckBox = styled.span`
  position: absolute;
  box-sizing: border-box;
  left: 0.5em;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  border-radius: 0.2em;
  background: #5e5e5e;
  padding-bottom: 0.05em;
  font-size: 0.8em;
  text-align: center;
  color: white;
  &:hover {
    background-color: #3b3b3b;
  }
`;
const Text = styled.span`
  position: absolute;
  left: 2.5em;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editable: false };
        // 向下傳遞的 function 要記得先綁定自己的 this
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    // 提供修改 state 的 function
    toggleEditMode() {
        this.setState({ editable: !this.state.editable });
        //console.log("nowstate:"+this.state.editable);
    }

    render() {
        // 判斷目前模式為何，渲染不同的畫面

        return (
            <>{this.state.editable ? this.renderEditMode() : this.renderViewMode()}</>
        );
    }

    // 列表元件狀態
    renderViewMode() {
        const { title, completed, onDelete, onToggle } = this.props;
        return (
            <>
                <CheckBox
                    checked={completed}
                    onClick={() => onToggle && onToggle(!completed)}
                    onChange={() => onToggle && onToggle(!completed)}
                >
                    {completed ? "✓" : ""}
                </CheckBox>
                <Text completed={completed} onClick={this.toggleEditMode}>
                    {title}
                </Text>
                <Button onClick={() => onDelete && onDelete()}>X</Button>
            </>
        );
    }

    // 編輯元件狀態
    renderEditMode() {
        const { title, onUpdate } = this.props;
        return (
            <InputField
                style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: "90%",
                    fontSize: "1em"
                }}
                autoFocus // autoFocus 讓使用者切換到編輯模式後，可以立即編打
                placeholder="編輯待辦事項"
                value={title}
                onBlur={this.toggleEditMode} // 失焦時觸發，當使用者點擊其他地方，則切換為「瀏覽模式」
                onKeyDown={e => {
                    // 當使用者按下 ESC，則切換為「瀏覽模式」
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                }}
                onSubmitEditing={content => {
                    // 觸發更新的 回調函數
                    onUpdate && onUpdate(content);
                    this.toggleEditMode();
                }}
            />
        );
    }
}
// 設置預期的 propTypes
TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
};
export default TodoItem;
