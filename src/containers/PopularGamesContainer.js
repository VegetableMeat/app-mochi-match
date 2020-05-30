import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/game/Action.js';

import PopularGames from '../components/PopularGames';

const mapStateToProps = (state) => {
  return {
    data: state.popularGameState.data,
    loadingFlag: state.popularGameState.loadingFlag
  }
}

const mapDispatchProps = (dispatch) => {
  return { 
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(PopularGames)