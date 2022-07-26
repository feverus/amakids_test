import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsLabirint as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import LabirintCell from './LabirintCell';
import timer from '../function/timer'
import S from '../styles/labirint.module.css'

type P = I.PropsStateLabirint & I.PropsDispaich;

function Labirint_i(props:P) {

    const [steps, setSteps] = useState<Array<string>>([])
    const [point, setPoint] = useState<Array<number>>([0, 0])

    async function pushStep(step:string, exit:boolean) {
        await timer(200); 
        let newSteps = steps.slice()
        let copyStep = step
        newSteps.push(copyStep)
        
        let copyLabirintMap = JSON.parse(JSON.stringify(props.labirintMap));
        let copyPoint = JSON.parse(JSON.stringify(point));
        //сначала заносим на карту шаг
        copyLabirintMap[point[0]][point[1]] = copyStep
        //а затем смещаем текущую позицию
        switch(step) {
            case 'up':
                copyPoint[1]--; break;
            case 'down':
                copyPoint[1]++; break;
            case 'left':
                copyPoint[0]--; break;
            case 'right':
                copyPoint[0]++; break;
            default: break;
        }   
        
        if (exit) {
            copyLabirintMap[copyPoint[0]][copyPoint[1]] = 'exit'
            if ((props.clickedCell[0]===copyPoint[0]) && (props.clickedCell[1]===copyPoint[1])) {
                //если кликнули на правильную клетку                
            } else {
                copyLabirintMap[props.clickedCell[0]][props.clickedCell[1]] = 'fail'
            }       
        }
        setPoint(copyPoint)
        props.changeLabirint({labirintMap:copyLabirintMap})
        setSteps(newSteps)
                       
    }

    useEffect(() => {
        if(props.endGame===true) {
            if (props.trajectory.length > steps.length) {
                pushStep(props.trajectory[steps.length], (steps.length === (props.trajectory.length-1) )?true:false)
            }
        }
    }, [steps])
    useEffect(() => {
        if(props.endGame===true) {
            setPoint(props.labirintEnter);
            setSteps([]);   
        }
    }, [props.endGame])

    return (
        <div className={S.block}>
            {props.labirintMap.map((row, x) => 
                <div className={S.column} key={x}>    
                    <>         
                    {row.map((cell, y) => 
                        <LabirintCell cell = {[x, y]} value = {cell}  key={x+'-'+y} />
                    )}
                    </> 
                </div>
            )}
        </div>
    );
}

const Labirint = connect(mapStateToProps(), mapDispatchToProps)(Labirint_i);
export default Labirint;