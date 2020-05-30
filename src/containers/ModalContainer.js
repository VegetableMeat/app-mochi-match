import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/common/Action.js';

import Modal from '../components/Modal';

const mapStateToProps = (state) => {
  return {
    showFlag: state.modalState.showFlag,
    category: state.modalState.category,
    data: state.modalState.data
  }
}

const mapDispatchProps = (dispatch) => {
  return { 
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Modal)