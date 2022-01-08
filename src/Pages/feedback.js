import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      again: false,
      ranking: false,
    };
    this.playAgain = this.playAgain.bind(this);
    this.seeRanking = this.seeRanking.bind(this);
  }

  seeRanking() {
    this.setState({ ranking: true });
  }

  playAgain() {
    this.setState({ again: true });
  }

  render() {
    const { again, ranking } = this.state;
    if (again) {
      return <Redirect to="/" />;
    } if (ranking) {
      return <Redirect to="/ranking" />;
    }
    return (
      <>
        <Header />
        {' '}
        <h1 data-testid="feedback-text">Feedback</h1>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Jogar novamente

        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.seeRanking }
        >
          Ver Ranking

        </button>
      </>
    );
  }
}

export default Feedback;
