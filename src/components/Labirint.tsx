import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsLabirint as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import LabirintCell from './LabirintCell';

type P = I.PropsStateLabirint & I.PropsDispaich;

function Labirint_i(props:P) {
    console.log(props.labirintMap)
    return (
        <>
        {props.labirintMap.map((row, y) => 
            <div key={y}>    
                <>         
                {row.map((cell, x) => 
                    <LabirintCell cell = {[x+1, y+1]} value = {cell}  key={x+'-'+y} />
                )}
                </> 
            </div>
        )}
        </>
    );
}

const Labirint = connect(mapStateToProps(), mapDispatchToProps)(Labirint_i);
export default Labirint;