import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </Provider>,
    document.getElementById('app')
);
