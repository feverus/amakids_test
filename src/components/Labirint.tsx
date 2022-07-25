import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsLabirint as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import LabirintCell from './LabirintCell';

type P = I.PropsStateLabirint & I.PropsDispaich;

function Labirint_i(props:P) {
    return (
        <>
        {props.labirintMap.map((row, x) => {
            <>
                {row.map((cell, y) => {
                    <LabirintCell cell = {[x, y]} value = {cell}  key={y}/>
                })}
                <br/>
            </>
        })}
        </>
    );
}

const Labirint = connect(mapStateToProps(), mapDispatchToProps)(Labirint_i);
export default Labirint;