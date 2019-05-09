import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

let _todos = [];

// 對 store 內資料處理的相關函式
const _createTodo = (todos, title) => {
    todos.push({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false
    });
    return todos;
};

const _updateTodo = (todos, id, title) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.title = title;
    return todos;
};

const _toggleTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.completed = completed;
    return todos;
};

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) todos.splice(idx, 1);
    return todos;
};

let TodoStore = {
    // 取得 store 內的 todos
    getAll() {
        return _todos;
    },
    // 註冊 listener 並提供註銷的 callback，在 emitter 發生變化時，觸動 view 所註冊的 callback
    addChangeListener(callback) {
        _emitter.on(CHANGE_EVENT, callback);
        return () => _emitter.removeListener(CHANGE_EVENT, callback);
    },
    // 註冊 dispatcher，來接收傳入的 action 並處理完後，透過 emitter 來觸發 view 所提供的 callback
    dispatchToken: AppDispatcher.register((action) => {
        switch (action.type) {
            case ActionTypes.LOAD_TODOS_SUCCESS:
                _todos = action.todos;
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.CREATE_TODO:
                _todos = _createTodo(_todos, action.title);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.UPDATE_TODO:
                _todos = _updateTodo(_todos, action.id, action.title);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.TOGGLE_TODO:
                _todos = _toggleTodo(_todos, action.id, action.completed);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.DELETE_TODO:
                _todos = _deleteTodo(_todos, action.id);
                _emitter.emit(CHANGE_EVENT);
                break;
        }
    })
};

export default TodoStore;