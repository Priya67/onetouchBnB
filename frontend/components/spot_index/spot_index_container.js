import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_action';
// import RootReducer from '../../reducers/root_reducer';
import SpotIndex from './spot_index';
import { fetchBookings } from '../../actions/booking_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: asArray(state.entities.spots),
  bookings: state.entities.bookings,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: (bounds) => dispatch(fetchSpots(bounds)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBookings: user_id => dispatch(fetchBookings(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
