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
    this.correctAnswer = this.correctAnswer.bind(this);
  }

  handleClick() {
    const { count } = this.state;
    const THREE = 3;
    let contador = count;
    if (count >= THREE) {
      contador = THREE;
    }
    this.setState({ count: contador + 1 });
    const btnC = document.querySelectorAll('#correct');
    const btnE = document.querySelectorAll('#errada');
    const btnNext = document.querySelector('#next');

    btnNext.style.display = 'none';
    btnC.forEach((e) => {
      e.style.border = '1px solid';
      e.disabled = false;
    });
    btnE.forEach((e) => {
      e.style.border = '1px solid';
      e.disabled = false;
    });
  }

  correctAnswer() {
    const btnC = document.querySelectorAll('#correct');
    const btnE = document.querySelectorAll('#errada');
    const btnNext = document.querySelector('#next');
    btnNext.style.display = 'inline-block';

    btnC.forEach((e) => {
      e.style.border = '3px solid rgb(6, 240, 15)';
      e.disabled = true;
    });
    btnE.forEach((e) => {
      e.style.border = '3px solid rgb(255, 0, 0)';
      e.disabled = true;
    });
  }

  render() {
    const { questions } = this.props;
    const { count } = this.state;
    if (questions) {
      const repostas = [
        ...questions[count].incorrect_answers];
      return (
        <>
          <h4 data-testid="question-category">{questions[count].category}</h4>
          <h1 data-testid="question-text">{questions[count].question }</h1>
          <ul>
            <button
              id="correct"
              type="button"
              data-testid="correct-answer"
              onClick={ this.correctAnswer }
            >
              {questions[count].correct_answer}

            </button>
            {repostas.map((element, index) => (
              <button
                id="errada"
                type="button"
                data-testid={ `wrong-answer-${index}` }
                onClick={ this.correctAnswer }
                key={ index }
              >
                {element}
              </button>))}
          </ul>
          <br />
          <button
            id="next"
            style={ { display: 'none' } }
            data-testid="btn-next"
            type="button"
            onClick={ this.handleClick }
          >
            Next

          </button>
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
