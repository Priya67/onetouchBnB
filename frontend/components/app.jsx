import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router-dom';
import { Route, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from 'react-modal';
import SpotIndexContainer from './spot_index/spot_index_container';
import SpotShowContainer from './spot_show/spot_show_container';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : '60%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -30%)'
    }
};
// import { AuthRoute, ProtectedRoute } from '../util/route_uil';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={modalOpen: ""};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(type) {
    return() => {
      this.setState({modalOpen: type});
    };
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen==='Sign In' || this.state.modalOpen==='Sign Up'}
          onRequestClose={this.handleToggle('')}
          contentLabel="modalTest"
          style={customStyles}>
          <SessionFormContainer modalType={this.state.modalOpen}
            closeModal={this.handleToggle('')}/>
        </Modal>
        <header>
          <Link to="/" className="header-link">
            <img src="/home-icon.png" alt="Logo" />
          </Link>
          <input type="text" name="search" id="search" placeholder="Search.."/>
          <GreetingContainer openSignUp={this.handleToggle('Sign Up')}
            openSignIn={this.handleToggle('Sign In')}
            />
        </header>
        <SpotIndexContainer />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />
    </div>
    );
  }

}

export default App;
