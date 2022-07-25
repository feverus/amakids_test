import * as I from '../store/storeInterfaces';
import r from '../function/randomInt'

type P = Pick<I.StateSet, 'movesOnTrajectory' | 'labirintSize' | 'labirintEnter'>

export default function generateTrajectory(props:P):I.StateLabirint {
    //генерация карты лабиринта
    let row = []
    let labirintMap = []    
    for (let i=1; i<=props.labirintSize[0]; i++) {
        row = [];
        for (let j=1; j<=props.labirintSize[1]; j++) {
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
    let startCell = props.labirintEnter
    let endCell = props.labirintEnter
    let rMove:number
    for (let i=1; i<=props.movesOnTrajectory; i++) {
        //убираем возможность двигаться из углов
        availableMoves = allMoves.slice();
        if (endCell[0]===0) {availableMoves = availableMoves.filter((el) => (el!=='left'))}
        if (endCell[0]===props.labirintSize[0]) {availableMoves = availableMoves.filter((el) => (el!=='right'))}
        if (endCell[1]===0) {availableMoves = availableMoves.filter((el) => (el!=='up'))}
        if (endCell[1]===props.labirintSize[1]) {availableMoves = availableMoves.filter((el) => (el!=='down'))}
        rMove = r(availableMoves.length - 1)
/*
        console.log('-------------' )
        console.log('ход ' + i)
        console.log(endCell)
        console.log(availableMoves)
        console.log(rMove)
        console.log(availableMoves[rMove])
*/
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
    return {labirintMap: labirintMap, trajectory: trajectory}
}