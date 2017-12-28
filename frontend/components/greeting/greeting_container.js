import { connect } from 'react-redux';

import { logout, clearErrors } from '../../actions/session_actions';
import { clearBookings } from '../../actions/booking_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: state.entities.bookings
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  clearBookings: () => dispatch(clearBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
