import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const app = (

    <BrowserRouter>
        <Provider store={store}><App /></Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));