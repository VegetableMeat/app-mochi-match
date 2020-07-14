import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../store/common/Action.js";

import Register from "../components/Register";

const mapStateToProps = (state) => {
  return {
    state: state.loginState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Register);
