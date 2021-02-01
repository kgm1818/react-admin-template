/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-01-22 17:18:31
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-01 11:01:36
 */
// import logo from './logo.svg';
import './App.css';
import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from "./views/home"
import User from "./views/user"
import {} from 'antd';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home?id=5555">
              <Home/>
            </Route>
            <Route path="/user">
              <User/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
