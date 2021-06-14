import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.checkButton());
  }

  checkButton() {
    const { email, name } = this.state;
    if (email.length !== 0 && name.length !== 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <form>
        <label htmlFor="id-name">
          <input
            data-testid="input-player-name"
            id="id-name"
            name="name"
            onChange={ this.handleChange }
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="id-email">
          <input
            data-testid="input-gravatar-email"
            id="id-email"
            name="email"
            onChange={ this.handleChange }
            placeholder="Email"
          />
        </label>
        <button
          data-testid="btn-play"
          disabled={ disabled }
          type="button"
        >
          Jogar
        </button>
      </form>
    );
  }
}

export default Home;
