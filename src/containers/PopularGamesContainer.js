import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../store/game/Action.js";

import PopularGames from "../components/PopularGames";

const mapStateToProps = (state) => {
  return {
    state: state.popularGameState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(PopularGames);
