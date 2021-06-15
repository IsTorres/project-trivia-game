import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestToken } from '../Actions';

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.redirectPage = this.redirectPage.bind(this);

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

  async redirectPage() {
    const { token, history: { push } } = this.props;
    await token();
    return push('/play');
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
          onClick={ this.redirectPage }
        >
          Jogar
        </button>
      </form>
    );
  }
}

Home.defaultProps = {
  token: () => {},
  history: { '': '' },
  push: () => {},
};

Home.propTypes = {
  token: PropTypes.func,
  history: PropTypes.shape(PropTypes.string),
  push: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  token: () => dispatch(requestToken()),
});

export default connect(null, mapDispatchToProps)(Home);
