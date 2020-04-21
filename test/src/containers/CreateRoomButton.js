// import React from 'react';
import { connect } from 'react-redux';
import CreateRoomButton from '../components/CreateRoomButton';
import { createRoom } from '../actions';

const mapStateToProps = (state) => {
    return {
        room: state.createRoomButton
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        roomPlus: () => {
            dispatch(createRoom());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomButton);
