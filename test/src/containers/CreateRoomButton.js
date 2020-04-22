import { connect } from 'react-redux';
import CreateRoomButton from '../components/CreateRoomButton';
import { createRoom } from '../actions';

const mapStateToProps = (state) => {
    return {
        room: state.roomState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createRoom: (host, game) => {
            dispatch(createRoom(host, game));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomButton);