import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../store/socket/Action';
import Top from '../components/Top';

const mapStateToProps = (state) => {
  return {
    state: state.adminState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Top);
