import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../store/common/Action.js";

import Configuration from "../components/Configuration";

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

export default connect(mapStateToProps, mapDispatchProps)(Configuration);
