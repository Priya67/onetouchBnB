import { connect } from 'react-redux';

import { fetchSpot, fetchUser, createReview } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, {match}) => {
  const spotId = parseInt(match.params.spotId);
  const currentUser = state.session.currentUser;
  const spot = selectSpot(state.entities, match.params.spotId);
  const user = state.entities.user;
  return {
    spotId,
    spot,
    user,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: (id) => dispatch(fetchSpot(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  fetchBookings: user_id => dispatch(fetchBookings(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
