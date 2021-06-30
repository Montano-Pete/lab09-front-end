/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import ListPage from './ListPage.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <h2>Beautiful Fruits abound!</h2>
          <Switch>
            <Route path="/" exact render={(routerProps) => <ListPage {...routerProps} />} 
            />
            <Route path="/fruits/:id" exact render={(routerProps) => <DetailPage {...routerProps} />} 
            />
            <Route path="/create" exact render={(routerProps) => <CreatePage {...routerProps} />} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}