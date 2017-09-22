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
        <div id="user-pic">
          <img src="/user.png" />
          <p className="header-name">{currentUser.username}</p>
        </div>
        <button className="header-button" onClick={logout}>Logout</button>
      </hgroup>
    );
  }
}

export default Greeting;
