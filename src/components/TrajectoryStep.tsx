import * as I from '../store/storeInterfaces';
import S from '../styles/trajectoryStep.module.css'

export default function TrajectoryStep(props:{direction:string, id:number}) {
    let arrow:string = ''
    switch(props.direction) {
        case 'up': arrow = S.up; break;
        case 'down': arrow = S.down; break;
        case 'left': arrow = S.left; break;
        case 'right': arrow = S.right; break;
    }
    return (
        <div className={S.block}>
            <div className={S.text}> 
            {props.id}       
            </div>            
            <div className={arrow}>        
            </div>
        </div>
    );
}   