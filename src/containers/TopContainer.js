import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as socketActionCreaters from "./../store/socket/Action";
import * as roomActionCreaters from "./../store/room/Action";
import Top from "../components/Top";

const mapStateToProps = (state) => {
  return {
    state: state.adminState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...roomActionCreaters,
        ...socketActionCreaters,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Top);
