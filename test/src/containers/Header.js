import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
    return {
        title: state.header.title,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);