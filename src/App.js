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

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Header</h2>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}