import { connect } from 'react-redux';

import { fetchSpot, fetchUser, createReview } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, {match}) => {
  const spotId = parseInt(match.params.spotId);
  // console.log("Spot", spotId);
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
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
