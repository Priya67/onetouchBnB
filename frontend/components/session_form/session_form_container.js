import { connect } from 'react-redux';

import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import { fetchBookings } from '../../actions/booking_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const formType = state.modalType;
  const processesForm = (formType === 'Sign In') ? login : signup;
  return {
    processForm: user => dispatch(processesForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    fetchBookings: user_id => dispatch(fetchBookings(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
