import React from 'react';
import { connect } from 'react-redux';
import CreateRoomButton from '../components/CreateRoomButton';
import { createRoom } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        roomPlus: () => {
            dispatch(createRoom());
        }
    };
}

export default connect(null, mapDispatchToProps)(CreateRoomButton);
