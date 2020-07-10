import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as initActionCreaters from '../store/init/Action';
import * as userActionCreaters from '../store/user/Action';
import * as roomActionCreaters from '../store/room/Action';
import * as socketActionCreaters from '../store/socket/Action';

import App from './../components/App';

const mapStateToProps = (state) => {
  return {
    state: state.adminState,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...initActionCreaters,
      ...userActionCreaters,
      ...roomActionCreaters,
      ...socketActionCreaters,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
