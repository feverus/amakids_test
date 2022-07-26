import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import TrajectoryStep from './TrajectoryStep';
import {mapStateToPropsTrajectory as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import timer from '../function/timer'
import S from '../styles/trajectory.module.css'

type P = I.PropsStateTrajectory & I.PropsDispaich;

function Trajectory_i(props:P) {    
    const [steps, setSteps] = useState<Array<string>>([])

    async function pushStep(step:string) {
        await timer(100); 
        let newSteps = steps.slice()
        newSteps.push(step) 
        setSteps(newSteps);               
    }

    useEffect(() => {
      if (props.trajectory.length > steps.length) {
        pushStep(props.trajectory[steps.length])
      }
    }, [steps])
    useEffect(() => {
      setSteps([]);
      if (props.trajectory.length > steps.length) {
        pushStep(props.trajectory[steps.length])
      }
    }, [props.trajectory])

    let styleSteps = S.step300
    if (props.trajectory.length > 10) styleSteps = S.step600
    return (
        <div className={styleSteps}>
        {steps.map((move, id) => <TrajectoryStep direction = {move} id={id} key={id} />)}
        </div>
    );
}

const Trajectory = connect(mapStateToProps(), mapDispatchToProps)(Trajectory_i);
export default Trajectory;

