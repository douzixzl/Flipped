import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router,hashHistory} from 'react-router'

import registerServiceWorker from './registerServiceWorker';


import route from './router/index'
import store from './store/store'



 ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={route}/> 
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

