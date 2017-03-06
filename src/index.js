import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/configureStore';

import './index.css';

// This is the "root" of your React App
// There are no difference with a standard React app.
// Meet me in /components/App.js
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
