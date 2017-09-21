import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
    );
  }

  sessionLinks() {
    return (
      <nav className = "login-signup">
        <Link to="/login" onClick={this.props.clearErrors}>Login</Link>
        &nbsp;
        <Link to="/signup" onClick={this.props.clearErrors}>Sign up</Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}</h2>
        <button className="header-button" onClick={logout}>Logout</button>
      </hgroup>
    );
  }
}

export default Greeting;
