import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as profileActionCreaters from "../store/profile/Action.js";
import * as commonActionCreaters from "../store/common/Action.js";
import ProfileSettings from "../components/ProfileSettings";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...profileActionCreaters, ...commonActionCreaters },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ProfileSettings);
