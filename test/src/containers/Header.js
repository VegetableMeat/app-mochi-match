import { connect } from 'react-redux';
import Header from '../components/header';

const mapStateToProps = (state) => {
    return {
        title: state.header.title,
        room: state.createRoomButton.room
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);