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
    // ajax 請求 json 資料的 action
    loadTodos() {
        fetch('todos.json')
            .then((response) => response.json())
            .then((todos) =>{
                return AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_TODOS_SUCCESS,
                    todos
                })
            } );
    },

    // 建立 todo 事項的 action
    createTodo(title) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_TODO,
            title
        });
    },
    // 更新 todo 事項的 action
    updateTodo(id, title) {
        AppDispatcher.dispatch({
            type: ActionTypes.UPDATE_TODO,
            id,
            title
        });
    },
    // 切換 todo 的完成狀態 flase/true 的 action
    toggleTodo(id, completed) {
        AppDispatcher.dispatch({
            type: ActionTypes.TOGGLE_TODO,
            id,
            completed
        });
    },
    // 刪除 todo 事項的 action
    deleteTodo(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_TODO,
            id
        });
    }
};

export default TodoActions;