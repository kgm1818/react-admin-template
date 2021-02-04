/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-01-22 17:18:31
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-02 10:08:46
 */
// import logo from './logo.svg';
import './App.css';
import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import Layout from "./components/layout"
import Login from "./views/login"
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login?id=5555" component={Login}/> */}
          <Route path="/login">
            <Login/>
          </Route>
          <Route component={Layout}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
