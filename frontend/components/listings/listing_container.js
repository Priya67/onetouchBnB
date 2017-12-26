import { connect } from 'react-redux';

// import { logout, clearErrors } from '../../actions/session_actions';
import Listings from './listings';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  null
)(Listings);
