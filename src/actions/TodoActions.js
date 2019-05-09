import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
//
// var myInit = {
//     method : 'GET',
//     headers:{
//             'Content-Type' : 'application/json'
//     },
//     mode: 'cors',
//     cache: 'default'};
//
// let myRequest = new Request("../todos.json", myInit);

let TodoActions = {

    loadTodos() {

        fetch('todos.json')
            .then((response) => response.json())
            .then((todos) =>{
                console.log(todos);
                return AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_TODOS_SUCCESS,
                    todos
                })
            } );
    },
    createTodo(title) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_TODO,
            title
        });
    },
    updateTodo(id, title) {
        AppDispatcher.dispatch({
            type: ActionTypes.UPDATE_TODO,
            id,
            title
        });
    },
    toggleTodo(id, completed) {
        AppDispatcher.dispatch({
            type: ActionTypes.TOGGLE_TODO,
            id,
            completed
        });
    },
    deleteTodo(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_TODO,
            id
        });
    }
};

export default TodoActions;