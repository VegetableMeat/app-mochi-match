import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../store/common/Action.js";

import History from "../components/History";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(History);
