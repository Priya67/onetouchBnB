import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state={actionType:""};
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      this.props.currentUser ?
      this.personalGreeting(this.props.currentUser, this.props.logout) :
      this.sessionLinks()
    );
  }


  sessionLinks() {
    return (
      <nav className = "login-signup">
      <button onClick={this.props.openSignIn}>Sign In</button>
      <button onClick={this.props.openSignUp}>Sign Up</button>
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
