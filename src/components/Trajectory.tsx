import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsTrajectory as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsStateTrajectory & I.PropsDispaich;

function Trajectory_i(props:P) {
    return (
        <></>
    );
}

const Trajectory = connect(mapStateToProps(), mapDispatchToProps)(Trajectory_i);
export default Trajectory;