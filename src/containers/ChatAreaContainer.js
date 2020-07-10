import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/room/Action.js';

import ChatArea from '../components/ChatArea.jsx';

const mapStateToProps = (state) => {
  return {
    state: state.roomState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ChatArea);
