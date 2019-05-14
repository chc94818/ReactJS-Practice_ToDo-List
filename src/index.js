import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import reducers from './reducers/todos'
import TodoApp from './components/TodoApp'
import './App.css';
import { Provider } from 'react-redux'


const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
};

const composedReducer = combineReducers(reducers);
const store = createStore(
    composedReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <div className="App-header">
            <TodoApp />
        </div>
    </Provider>,
    document.getElementById('app')
);