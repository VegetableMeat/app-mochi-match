import { connect } from 'react-redux';
import Body from '../components/body';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        room: state.createRoomButton.room
    };
};

export default connect(mapStateToProps)(Body);
