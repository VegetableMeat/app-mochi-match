import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as profileActionCreaters from "../store/profile/Action.js";
import ProfileSettings from "../components/ProfileSettings";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...profileActionCreaters }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ProfileSettings);
