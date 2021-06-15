import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    if (token !== '') {
      this.setLocalStorage();
    }
  }

  async setLocalStorage() {
    const { token } = this.state;
    localStorage.setItem('tokenId', token);
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
        O jogo!
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
