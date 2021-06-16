import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { count } = this.state;
    const THREE = 3;
    let contador = count;
    if (count >= THREE) {
      contador = THREE;
    }
    console.log(contador);
    this.setState({ count: contador + 1 });
  }

  render() {
    const { questions } = this.props;
    const { count } = this.state;
    if (questions) {
      const repostas = [
        questions[count].incorrect_answers];
      console.log(repostas);
      return (
        <>
          <h4 data-testid="question-category">{questions[count].category}</h4>
          <h1 data-testid="question-text">{questions[count].question }</h1>
          <ul>
            <button type="button" data-testid="correct-answer">
              {questions[count].correct_answer}

            </button>
            {repostas.map((element, index) => (
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
                key={ index }
              >
                {element}
              </button>))}
          </ul>
          <br />
          <button type="button" onClick={ this.handleClick }>Next</button>
        </>
      );
    }
    return (
      <div />
    );
  }
}
Trivia.propTypes = {
  questions: PropTypes.shape(PropTypes.string),

}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.loginReducer.payload,
});
export default connect(mapStateToProps)(Trivia);
