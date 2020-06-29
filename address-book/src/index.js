import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { contactsReducer } from '../src/ContactForm/reducer';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
const addressBookApp = combineReducers({
  contacts: contactsReducer,
})
const store = createStore(addressBookApp)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();