import { connect } from 'react-redux';
import CreateRoomButton from '../components/createRoomButton';
import { createRoom } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        roomPlus: () => {
            dispatch(createRoom());
        }
    };
}

export default connect(null, mapDispatchToProps)(CreateRoomButton);
