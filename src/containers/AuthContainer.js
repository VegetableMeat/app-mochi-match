import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/common/Action.js';

import Auth from '../components/Auth';

const mapStateToProps = (state) => {
	return {
		state: state.authState
	}
}

const mapDispatchProps = (dispatch) => {
	return { 
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchProps)(Auth)