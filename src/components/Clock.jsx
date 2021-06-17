import React, { Component } from 'react';

const ONE_SECOND = 100;
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 30 };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.cronometerInerval = setInterval(() => {
      this.setState((state) => ({ seconds: state.seconds - 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(_prevProps, prevState) {
    const MinSeconds = 0;
    if (prevState.seconds === MinSeconds) {
      this.changeState();
    }
  }

  componentWillUnmount() {
    clearInterval(this.cronometerInerval);
  }

  changeState() {
    this.setState({ seconds: 30 });
  }

  render() {
    const { seconds } = this.state;

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}
