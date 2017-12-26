import { connect } from 'react-redux';

import { fetchBookings } from '../../actions/booking_actions';
import Bookings from './bookings';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  console.log("hey", state);
  return {
    bookings: state.entities.bookings,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: user_id => dispatch(fetchBookings(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
