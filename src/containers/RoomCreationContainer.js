import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as roomActionCreaters from "../store/room/Action.js";

import RoomCreation from "../components/RoomCreation";

const mapStateToProps = (state) => {
  return {
    roomCreation: state.roomCreationState,
    user: state.userState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...roomActionCreaters }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(RoomCreation);
