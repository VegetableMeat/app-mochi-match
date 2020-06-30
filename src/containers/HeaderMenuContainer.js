import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/common/Action.js';

import HeaderMenu from '../components/HeaderMenu';

const mapStateToProps = (state) => {
  return {
    state: state.headerMenuState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(HeaderMenu);
