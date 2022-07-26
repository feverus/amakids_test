import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsLabirintCell as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import S from '../styles/labirintCell.module.css'
type P = I.PropsStateLabirintCell &I.PropsDispaich & {cell:Array<number>, value:string};

function LabirintCell_i(props:P) {
    const handleClick = () => {
        console.log(props.cell);
        console.log(props.labirintExit);
        ((props.cell[0]===props.labirintExit[0]) && (props.cell[1]===props.labirintExit[1])) ? props.onCellClick({win:true}) : props.onCellClick({win:false});
    }
    let buttonStyle = S.hall;
    if (props.value==='enter') buttonStyle += ' ' + S.enter
    return (
        <div className={S.cell}>
            <button className={buttonStyle} onClick={() => {handleClick()}} >{props.cell}
            {props.value}
            </button>
        </div>
    );
}

const LabirintCell = connect(mapStateToProps, mapDispatchToProps)(LabirintCell_i);
export default LabirintCell;