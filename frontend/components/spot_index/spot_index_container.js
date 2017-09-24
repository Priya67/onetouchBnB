import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
// import RootReducer from '../../reducers/root_reducer';
import SpotIndex from './spot_index';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
