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
      phone_number: "",
      demo: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changedemo = this.changedemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
   this.props.processForm({ user }).then(() => this.props.closeModal());
  }

  changedemo(e){
    this.setState({
      username: "User",
      password: "password"
    }, () => {
      const user = this.state;
      this.props.processForm({ user }).then(() => this.props.closeModal());
    });
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
        <label>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="signup-input"
            placeholder="Email Address"/>
        </label>
        <br />
        <label>
          <input type="text"
            value={this.state.phone_number}
            onChange={this.update('phone_number')}
            className="signup-input"
            placeholder="Phone number"/>
        </label>
        <br/>
        <br/>
        <input type="file" name="pic" accept="image/*" />
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <h1>{this.props.modalType}</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br />
            <label>
              <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            </label>
            <br />
              { this.props.modalType==='Sign Up' ? this.signupInputs() : "" }
          <br />
          <button>{this.props.modalType}</button>
          </div>
        </form>
        <br />
        { this.props.modalType==='Sign Up' ? "" : <div><p>OR</p><button onClick={this.changedemo} >demo login</button></div> }
      </div>
    );
  }
}

export default withRouter(SessionForm);
