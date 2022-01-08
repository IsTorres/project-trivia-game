import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Play from './Pages/play';
import Home from './Pages/home';
import settings from './Pages/settings';
import Feedback from './Pages/feedback';
import Ranking from './Pages/ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/settings" component={ settings } />
      <Route path="/play" component={ Play } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />
    </Switch>
  );
}
