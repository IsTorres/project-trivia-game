import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="id-name">
          <input
            data-testid="input-player-name"
            id="id-name"
            name="name"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="id-email">
          <input
            data-testid="input-gravatar-email"
            id="id-email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <button data-testid="btn-play">
          Jogar
        </button>
      </form>
    );
  }
}

export default Home;
