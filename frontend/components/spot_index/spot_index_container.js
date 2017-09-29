import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_action';
// import RootReducer from '../../reducers/root_reducer';
import SpotIndex from './spot_index';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
