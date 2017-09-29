import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import merge from 'lodash/merge';

const CLOUDINARY_UPLOAD_PRESET = 'vhviu6hs';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dlgwlvcuy/upload';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {
        username: "",
        fname: "",
        lname: "",
        password: "",
        img_url: "",
        email: "",
        phone_number: "",
      },
      uploadedFileCloudinaryUrl: '',
      demo: false,
      uploadedFile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changedemo = this.changedemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    // console.log("currentUser"+ this.props.currentUser);
    // console.log("img"+ this.state.uploadedFileCloudinaryUrl);
    // this.props.currentUser.img_url = this.state.uploadedFileCloudinaryUrl;
  }

  update(field) {
    return e => this.setState(
      merge(
        this.state,
        {
          user: {
            [field]: e.currentTarget.value
          }
        }
      )
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    console.log("user"+Object.values(user));
   this.props.processForm({ user }).then(() => this.props.closeModal());
  }

  changedemo(e){
    this.setState({
      user:{username: "User",
        password: "password"}
    }, () => {
      const user = this.state.user;
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

  onImageDrop(files) {
    // console.log("files"+files[0]);
    // debugger
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState(
          merge(this.state,
            {
              user: {
                img_url: response.body.secure_url
              },
              uploadedFileCloudinaryUrl: response.body.secure_url,
            }));
      console.log("img_url"+this.state.user.img_url);
      }
    });
  }

  signupInputs() {
    return (
      <div>
        <label>
          <input type="text"
            value={this.state.lname}
            onChange={this.update('lname')}
            className="login-input"
            placeholder="Last Name"
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
        <div id="select-image">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>select a file to upload.</p>
          </Dropzone>
        </div>
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
              <input type="text"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input"
                placeholder="First Name"
              />
            </label>
            <br />
              { this.props.modalType==='Sign Up' ? this.signupInputs() : "" }
          <br />
          <button>{this.props.modalType}</button>
          </div>
        </form>
        <br />
        { this.props.modalType==='Sign Up' ? "" : <div><br /><button onClick={this.changedemo} >demo login</button></div> }
      </div>
    );
  }
}

export default withRouter(SessionForm);
