import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from "prop-types";
import styled from 'styled-components';
const Li = styled.li`
            & ::before {
                content: "";
                color: red;
                display: inline-block; 
            }
            background-color : #8C8C8C;
            
            margin : 0.5em;
            padding: 0.5em;
            border-radius : 0.5em;            
            color : white;
            font-weight: bold; 
            font-size : 1em;            
            text-align: center;
        `;
class TodoList extends React.Component {

    render() {
        const {
            todos,
            onDeleteTodo,
            onToggleTodo,
            onUpdateTodo
        } = this.props; // 從 props 中，取得 todos (待辦清單) 陣列

        // 將每一筆項目轉成 li 元素，並塞入對應的待辦資料
        // PS. 務必給每筆 li 唯一 key
        const todoElements = todos.map((todo) => (

            <Li key={todo.id}>
                <TodoItem
                    style={{display:'inline-block'}}
                    title={todo.title}
                    completed={todo.completed}
                    onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
                    onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
                    onUpdate={(content) => onUpdateTodo && onUpdateTodo(todo.id, content)}
                />
            </Li>
        ));


        return <ul >{todoElements}</ul>;
    }
}
// 設置預期的 propTypes
TodoItem.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
};
export default TodoList;