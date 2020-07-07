import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commonActionCreaters from '../store/common/Action.js';
import * as roomActionsCreaters from '../store/room/Action.js';

import Modal from '../components/Modal';

const mapStateToProps = (state) => {
  return {
    state: state.modalState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...commonActionCreaters,
      ...roomActionsCreaters,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Modal);
