import { connect } from 'react-redux';
import Body from '../components/Body';

const mapStateToProps = (state) => {
    return {
        rooms: state.roomState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);