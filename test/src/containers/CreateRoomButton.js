import React from 'react';
import { connect } from 'react-redux';
//import CreateRoomButton from '../components/CreateRoomButton';
import { createRoom } from '../actions';

const mapStateToProps = (state) => {
    return {
        room: state.createRoomButton.room
    };
};

const mapDispatchToProps = (dispatch) => {
    /*return {
        createRoom: room => {
            dispatch(createRoom(room));
        }
    };*/
    
}

let CreateRoomButton = ({dispatch}) => {
    return (
        <button onClick={() => dispatch(createRoom())}>ルーム作成</button>
    )
}
export default connect(mapStateToProps)(CreateRoomButton);

//export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomButton);