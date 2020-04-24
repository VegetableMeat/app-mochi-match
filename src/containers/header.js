import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    title: state.Header.title
  };
};

export default connect(mapStateToProps)(Header);