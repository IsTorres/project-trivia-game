import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Trivia from '../components/Trivia';

class Play extends Component {
  constructor(props) {
    super(props);

    this.saveToken = this.saveToken.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);

    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    this.saveToken();
  }

  componentDidUpdate() {
    const { token } = this.state;
    if (token !== undefined) {
      this.setLocalStorage();
    }
  }

  async setLocalStorage() {
    const { token } = this.state;
    localStorage.setItem('token', token);
  }

  async saveToken() {
    const { tokenId } = this.props;
    this.setState({
      token: tokenId.tokenId,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Trivia />
      </div>
    );
  }
}

Play.propTypes = {
  tokenId: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ loginReducer: tokenId }) => ({
  tokenId,
});

export default connect(mapStateToProps)(Play);
