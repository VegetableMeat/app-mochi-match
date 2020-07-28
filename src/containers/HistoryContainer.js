import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as historyActionCreaters from "../store/history/Action.js";
import * as commonActionCreaters from "../store/common/Action.js";

import History from "../components/History";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...historyActionCreaters,
        ...commonActionCreaters,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(History);
