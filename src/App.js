import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/home';
import Play from './Pages/play';

export default function App() {
  return (
    <Switch>
      <Route path="/play" component={ Play } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}
