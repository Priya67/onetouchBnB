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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log("I am in submit");
    e.preventDefault();
    if(this.state.demo===true) {
      this.demoUser();
    }
    const user = this.state;
   this.props.processForm({ user }).then(() => this.props.closeModal());
  }

  demoUser() {
    this.setState({
      username: "Priya",
      password: "password"
    });
    // this.props.processForm({ user }).then(() => this.props.closeModal());
  }

  changedemo(e){
    this.setState({
      username: "Priya",
      password: "password"
    }, () => {
      const user = this.state;
      this.props.processForm({ user }).then(() => this.props.closeModal());
    });
    // console.log("changedemo");
    // this.setState({
    //   demo: true
    // });
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
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
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
              { this.props.modalType==='Sign Up' ? this.signupInputs() : "" }
          <br />
          <button>Login</button>
          </div>
        </form>
        { this.props.modalType==='Sign Up' ? "" : <button onClick={this.changedemo} >demo login</button> }
      </div>
    );
  }
}

export default withRouter(SessionForm);
