import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  let obj = {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1);
  }

)

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm;
  formType === 'login' ? processForm = login : processForm = signup;

  return {
    processForm: user => dispatch(processForm(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
