import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class ranking extends Component {
  constructor() {
    super();
    this.state = {
      home: false,
    };
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.setState({ home: true });
  }

  render() {
    const { home } = this.state;
    if (home) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.redirectHome }
        >
          New-Game

        </button>
      </div>
    );
  }
}
