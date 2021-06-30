/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css';
import ListPage from './ListPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CreatePage from './CreatePage.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Beautiful Fruits abound!</h2>
          <p><Link to="/create">Add Fruit!</Link></p>
          <p><Link to="/">Home</Link></p>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            />          
          </Switch>
          <Switch>
            <Route 
              path="/create" 
              exact
              render={(routerProps) => <CreatePage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}