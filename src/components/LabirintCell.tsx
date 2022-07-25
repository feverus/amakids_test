import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsDispaich & {cell:Array<number>, value:string};

function LabirintCell_i(props:P) {
    console.log(props)
    return (
        <div>
        <button onChange={() => props.onCellClick(props.cell)} >{props.value}</button>
        </div>
    );
}

const LabirintCell = connect(null, mapDispatchToProps)(LabirintCell_i);
export default LabirintCell;