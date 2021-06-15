import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/home';
import settings from './Pages/settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/settings" component={ settings } />
    </Switch>
  );
}
