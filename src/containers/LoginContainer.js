import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as commonActionCreaters from "../store/common/Action.js";

import Login from "../components/Login";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...commonActionCreaters }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Login);
