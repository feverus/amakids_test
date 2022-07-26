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
        console.log('pushStep ' +step)
        await timer(100); 
        let newSteps = steps.slice()
        newSteps.push(step) 
        console.log(newSteps)
        setSteps(newSteps);                 
    }

    useEffect(() => {
      console.log('>')
      if (props.trajectory.length > steps.length) {
        pushStep(props.trajectory[steps.length])
      }
    }, [steps])
    useEffect(() => {
      console.log('>>>')
      setSteps([]);
      if (props.trajectory.length > steps.length) {
        pushStep(props.trajectory[steps.length])
      }
    }, [props.trajectory])

    return (
        <div className={S.steps}>
        {steps.map((move, id) => <TrajectoryStep direction = {move} id={id} key={id} />)}
        </div>
    );
}

const Trajectory = connect(mapStateToProps(), mapDispatchToProps)(Trajectory_i);
export default Trajectory;

