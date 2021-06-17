import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <Header />
        <span data-testid="feedback-text">Texto feedback</span>
      </>
    );
  }
}

export default Feedback;
