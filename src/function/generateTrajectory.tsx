import * as I from '../store/storeInterfaces';
import r from '../function/randomInt'

type P = Pick<I.StateSet, 'movesOnTrajectory' | 'labirintSize' | 'labirintEnter'>
type R = I.StateLabirint & Pick<I.StateSet, 'labirintEnter' | 'labirintExit'>


export default function generateTrajectory(props:P):R {
    //генерация карты лабиринта
    let row = []
    let labirintMap = []    
    for (let x=1; x<=props.labirintSize[0]; x++) {
        row = [];
        for (let y=1; y<=props.labirintSize[1]; y++) {
            row.push('')
        }
        labirintMap.push(row)
    }
    //генерация траектории
    let allMoves:Array<string> = []
    for(let key in I.Moves) {
        if (typeof I.Moves[key] === 'string')
            allMoves.push(I.Moves[key]);
    }
    let availableMoves: Array<string> = []
    let trajectory = []
    let endCell = [props.labirintEnter[0], props.labirintEnter[1]]
    let rMove:number
    for (let i=1; i<=props.movesOnTrajectory; i++) {
        //убираем возможность двигаться из углов
        availableMoves = allMoves.slice();
        if (endCell[0]===0) {availableMoves = availableMoves.filter((el) => (el!=='left'))}
        if (endCell[0]===props.labirintSize[0]-1) {availableMoves = availableMoves.filter((el) => (el!=='right'))}
        if (endCell[1]===0) {availableMoves = availableMoves.filter((el) => (el!=='up'))}
        if (endCell[1]===props.labirintSize[1]-1) {availableMoves = availableMoves.filter((el) => (el!=='down'))}
        rMove = r(availableMoves.length) - 1        
        trajectory.push(availableMoves[rMove])
        switch(trajectory[trajectory.length - 1]) {
            case 'up':
                endCell[1]--; break;
            case 'down':
                endCell[1]++; break;
            case 'left':
                endCell[0]--; break;
            case 'right':
                endCell[0]++; break;
            default: break;
        }
    }
    labirintMap[props.labirintEnter[0]][props.labirintEnter[1]] = 'enter'
    return {labirintMap: labirintMap, trajectory: trajectory, labirintEnter: props.labirintEnter, labirintExit: endCell}
}