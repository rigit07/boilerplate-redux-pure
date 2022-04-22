import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Store_1, Store_2, Store_3} from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store_3}>
      <p>Store_3</p>
      <Provider store={Store_1}>
        <div style={{padding:'20px'}}>
          <p>Store_1</p>
          <App />
        </div>
      </Provider>
      <Provider store={Store_2}>
        <div style={{padding:'20px'}}>
          <p>Store_2</p>
          <App />
        </div>
      </Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
