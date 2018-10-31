import React from 'react';
import './index.css';
import App from './App';
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, middleware)

const whitespace = () => (<Provider store={store}>
  <App />
</Provider>)

export default whitespace;