import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//A.
import { Provider } from 'react-redux'

//B.
import { store } from './store'

//C.
ReactDOM.render(
    //pass the store to the Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
