import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import firebase from './components/firebase/firebase';

import history from './components/App';
import { login,logout } from './actions/index'


const store = createStore(reducers , {}, applyMiddleware(reduxThunk));

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('#root')
    )
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(login(user));
      renderApp();
    } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');
    }
  });