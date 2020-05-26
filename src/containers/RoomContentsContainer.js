import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/room/Action.js';

import RoomContents from '../components/RoomContents';

const mapStateToProps = (state) => {
  console.log(state.roomState)
  return {
    data: state.roomState
  }
}

const mapDispatchProps = (dispatch) => {
  return { 
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(RoomContents)