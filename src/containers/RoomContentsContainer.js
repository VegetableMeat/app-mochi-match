import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../store/room/Action.js';
import * as commonActions from '../store/common/Action.js';

import RoomContents from '../components/RoomContents';

const mapStateToProps = (state) => {
  return {
    data: state.roomListState.data,
    loaddingFlag: state.roomListState.loaddingFlag
  }
}

const mapDispatchProps = (dispatch) => {
  return { 
    roomActions: bindActionCreators(roomActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(RoomContents)