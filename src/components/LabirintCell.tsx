import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsLabirintCell as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import S from '../styles/labirintCell.module.css'
type P = I.PropsStateLabirintCell &I.PropsDispaich & {cell:Array<number>, value:string};

function LabirintCell_i(props:P) {
    const handleClick = () => {
        ((props.cell[0]===props.labirintExit[0]) && (props.cell[1]===props.labirintExit[1])) ? props.onCellClick({win:true, clickedCell:props.cell}) : props.onCellClick({win:false, clickedCell:props.cell});
    }
    let buttonStyle = S.hall;
    switch(props.value) {
        case 'enter': buttonStyle += ' ' + S.enter; break;
        case 'exit': buttonStyle += ' ' + S.exit; break;
        case 'fail': buttonStyle += ' ' + S.fail; break;
        case 'up': buttonStyle += ' ' + S.up; break;
        case 'down': buttonStyle += ' ' + S.down; break;
        case 'left': buttonStyle += ' ' + S.left; break;
        case 'right': buttonStyle += ' ' + S.right; break;
    }
    let disabled = false
    if (props.endGame) disabled = true
    return (
        <div className={S.cell}>
            <button className={buttonStyle} onClick={() => {handleClick()}} disabled={disabled}>
            </button>
        </div>
    );
}

const LabirintCell = connect(mapStateToProps, mapDispatchToProps)(LabirintCell_i);
export default LabirintCell;