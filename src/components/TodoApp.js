import React from 'react';
import TodoHeaderContainer from './TodoHeaderContainer'
import CreateTodoFieldContainer from './CreateTodoFieldContainer'
import TodoListContainer from './TodoListContainer'
import TodoActions from '../actions/TodoActions';
import {connect } from 'react-redux';
import styled from "styled-components";
const AppDiv = styled.div`
    display: flex;
    width: 50%;    
    flex-direction: column;
    @media screen and (max-width:500px) {
        width:90%
    }
  
`;
class TodoApp extends React.Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        return (
            <AppDiv>
                <TodoHeaderContainer />
                <CreateTodoFieldContainer/>
                <TodoListContainer />
            </AppDiv>
        );
    }
}
TodoApp = connect(undefined, {
    loadTodos: TodoActions.loadTodos
})(TodoApp);
export default TodoApp;