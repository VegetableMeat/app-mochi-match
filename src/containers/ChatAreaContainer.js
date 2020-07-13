import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as roomActions from "../store/room/Action.js";
import * as commonActions from "../store/common/Action.js";

import ChatArea from "../components/ChatArea.jsx";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...roomActions,
        ...commonActions,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ChatArea);
