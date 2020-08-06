import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as roomActionCreaters from "../store/room/Action.js";
import * as historyActionCreaters from "../store/history/Action.js";

import InTheRoom from "../components/InTheRoom.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.roomState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...roomActionCreaters, ...historyActionCreaters },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(InTheRoom);
