/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-01-22 17:18:31
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-02 11:54:07
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./assets/styles/base.css"
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
