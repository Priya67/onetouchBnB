import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from 'react-modal';
import SpotIndexContainer from './spot_index/spot_index_container';
import SpotShowContainer from './spot_show/spot_show_container';
import ReviewFormContainer from './spot_show/review_form_container';
import BookingContainer from './booking/booking_container.js';
import ListingContainer from './listings/listing_container';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                   : '37%',
    left                  : '50%',
    right                 : '60%',
    bottom                : 'auto',
    marginRight           : '-50%',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    // max-height            : '100%',
    overflow            : 'auto',
    transform: 'translate(-50%, -30%)'
    }
};

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
            <img src="https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506582675/images_evrzcv.png" alt="Logo" id="logo" />
          </Link>
          <p><i>Find your perfect home in SF over oneTouch</i></p>
          <GreetingContainer openSignUp={this.handleToggle('Sign Up')}
            openSignIn={this.handleToggle('Sign In')}
            />
        </header>
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />
        <Route exact path="/" component={SpotIndexContainer} />
        <ProtectedRoute exact path="/spots/:spotId/review" component={ReviewFormContainer}/>
        <Route path="/bookings/:id" component={BookingContainer} />
        <Route path="/listings/:id" component={ListingContainer} />
    </div>
    );
  }

}

export default App;
