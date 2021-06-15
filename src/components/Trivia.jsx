import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrivaQuestions } from '../Services/API';

class Trivia extends Component {
  constructor() {
    super();
    this.resultAPI = this.resultAPI.bind(this);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.resultAPI();

    // const result = getTrivaQuestions(token)
    //   .then((results) => results);
    // console.log(result);
    // this.setState({
    //   questions: result,
    // });
    // const questions = getTrivaQuestions(token);
  }

  async resultAPI() {
    const { token } = this.props;
    const returnQuestions = await getTrivaQuestions(token);
    // console.log(returnQuestions.results);
    this.setState({
      questions: returnQuestions.results,
    }, () => this.setState({
      questions: this.state.questions,
    }));
  }

  render() {
    const { questions } = this.state;
    let perguntas = '';
    let respostasErradas = [];
    if (questions.length > 0) {
      console.log(questions[0].question);
      perguntas = questions[0].question;
      respostasErradas = questions[0].incorrect_answers;
    } else {
      console.log('oi');
    }
    // questions.map((question, index) => (<h1 key={ index }>{`${question}`}</h1>));
    return (
      <div>
        <h1>{perguntas}</h1>
        <p>{respostasErradas}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.tokenId,
});

export default connect(mapStateToProps)(Trivia);
