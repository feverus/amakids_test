import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import TrajectoryStep from './TrajectoryStep';
import {mapStateToPropsTrajectory as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsStateTrajectory & I.PropsDispaich;

function Trajectory_i(props:P) {
    return (
        <>
        {props.trajectory.map((move) => <TrajectoryStep direction = {move} />)}
        </>
    );
}

const Trajectory = connect(mapStateToProps(), mapDispatchToProps)(Trajectory_i);
export default Trajectory;