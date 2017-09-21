import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      img_url: "",
      email: "",
      phone_number: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  navLink() {
    if(this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            { error }
          </li>
        ))}
      </ul>
    );
  }

  signupInputs() {
    return (
      <div>
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="signup-input" />
        </label>
        <br />
        <label>phone Number:
          <input type="text"
            value={this.state.phone_number}
            onChange={this.update('phone_number')}
            className="signup-input" />
        </label>
        <br/>
        <input type="file" name="pic" accept="image/*" />
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to OneTouchBnB!
          <br />
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            </label>
            <br />
              { this.props.formType==='signup' ? this.signupInputs() : "" }
          <br />
          <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
