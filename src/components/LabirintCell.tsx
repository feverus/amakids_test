import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsDispaich & {cell:Array<number>, value:string};

function LabirintCell_i(props:P) {
    return (
        <>
        {'<button onChange={() => onCellClick()} />'}
        </>
    );
}

const LabirintCell = connect(null, mapDispatchToProps)(LabirintCell_i);
export default LabirintCell;