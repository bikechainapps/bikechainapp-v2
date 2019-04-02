import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "./Admin";
import Stat from "./Stat";

class App extends Component {  render() {
    return (
      <HashRouter>
        <div>
          <h1>Bikechain Dashboard</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/stat">Stat</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/stat" component={Stat}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
