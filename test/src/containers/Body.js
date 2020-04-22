// import React from 'react';
import { connect } from 'react-redux';
import Body from '../components/Body';

const mapStateToProps = (state) => {
    return {
        room: state.createRoomButton.room
    };
};

export default connect(mapStateToProps)(Body);
