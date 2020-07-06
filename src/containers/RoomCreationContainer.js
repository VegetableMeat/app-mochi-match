import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/room/Action.js';

import RoomCreation from '../components/RoomCreation';

const mapStateToProps = (state) => {
  return {
    state: state.roomCreationState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(RoomCreation);
