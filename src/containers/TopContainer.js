import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as socketActionCreaters from "./../store/socket/Action";
import * as roomActionCreaters from "./../store/room/Action";
import * as commonActionCreaters from "../store/common/Action.js";
import * as searchActionCreaters from "../store/search/Action.js";
import Top from "../components/Top";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...roomActionCreaters,
        ...socketActionCreaters,
        ...commonActionCreaters,
        ...searchActionCreaters,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Top);
