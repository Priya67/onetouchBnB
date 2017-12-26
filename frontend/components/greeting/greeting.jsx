import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
        </div>

        <div class="dropdown">

          <div class ="dropbtn">
            {currentUser.img_url==="" ?
              <img src="https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1506118306/user_aiufn8.png" />
                : <img src={currentUser.img_url}
              />
            }
          </div>

          <div class="dropdown-content">
            <Link to={`/bookings/${currentUser.id}`}>Bookings</Link>
            <p>Listings</p>
            <p>Reviews</p>
            <p onClick={logout}>Logout</p>
          </div>
        </div>

      </hgroup>
    );
  }
}

export default Greeting;
