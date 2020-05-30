import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/game/Action.js';

import FavoriteGames from '../components/FavoriteGames';

const mapStateToProps = (state) => {
  return {
    data: state.favoriteGameState.data,
    loadingFlag: state.favoriteGameState.loadingFlag
  }
}

const mapDispatchProps = (dispatch) => {
  return { 
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(FavoriteGames)