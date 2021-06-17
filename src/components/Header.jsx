import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { hash, name, rank } = this.props;
    return (
      <>
        <h4
          data-testid="header-score"
        >
          {rank}
        </h4>
        <h3 data-testid="header-player-name">{name}</h3>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${hash}` }
          alt="Avatar"
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  name: state.userReducer.name,
  hash: state.userReducer.hash,
  rank: state.userReducer.rank,
});
Header.propTypes = {
  hash: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
export default connect(mapStateToProps)(Header);
