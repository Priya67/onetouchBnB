import { connect } from 'react-redux';

import { fetchSpot, fetchUser } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, {match}) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, match.params.spotId);
  const user = state.entities.user;
  return {
    spotId,
    spot,
    user
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
