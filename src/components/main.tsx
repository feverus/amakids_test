import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsMain as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import MainMenu from './MainMenu';
import Header from './Header';
import Labirint from './Labirint';
import Trajectory from './Trajectory';

type P = I.PropsStateMain & I.PropsDispaich;

function Main_i(props:P) {
    switch(props.page) {
        case 'start' :
            return (
                <MainMenu/>
            );
            break;
        case 'game' :
            return (
                <>
                    <Header/>
                    <Labirint/>
                    <Trajectory/>
                </>
            );
            break;
        default: return(<></>)        
    }

}

const Main = connect(mapStateToProps(), mapDispatchToProps)(Main_i);
export default Main;