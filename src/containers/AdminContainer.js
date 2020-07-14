import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/common/Action.js';

import Admin from '../components/Admin';

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

export default connect(mapStateToProps, mapDispatchProps)(Admin);
