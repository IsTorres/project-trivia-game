import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class ranking extends Component {
  constructor() {
    super();
    this.state = {
      again: false,
    };
    this.playAgain = this.playAgain.bind(this);
  }

  playAgain() {
    this.setState({ again: true });
  }

  render() {
    const { again } = this.state;
    if (again) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Jogar novamente
        </button>
      </div>
    );
  }
}
