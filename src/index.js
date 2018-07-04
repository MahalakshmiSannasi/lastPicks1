import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import filterReducer from './components/github/filterReducer';
import {combineReducers} from 'redux';

export default combineReducers({

    filters: filterReducer,
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
