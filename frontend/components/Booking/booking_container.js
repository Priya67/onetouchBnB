import { connect } from 'react-redux';

import { receiveBookings } from '../../actions/booking_actions';
import Bookings from './bookings';

const mapStateToProps = ({ bookings }) => ({
  bookings: asArray(state.bookings)
});

const mapDispatchToProps = dispatch => ({
  receiveBookings: user_id => dispatch(receiveBookings(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
