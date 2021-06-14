import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/home';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={ Home } />
    </Switch>
  );
}
