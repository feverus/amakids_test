import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsMain as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import MainMenu from './MainMenu';
import Header from './Header';
import Labirint from './Labirint';
import Trajectory from './Trajectory';
import EndGame from './EndGame';
import S from '../styles/main.module.css'

type P = I.PropsStateMain & I.PropsDispaich;

function Main_i(props:P) {
    switch(props.page) {
        case 'start' :
            return (
                <div className={S.main}>
                    <MainMenu />
                </div>
            );
            break;
        case 'game' :
            return (
                <div className={S.main}>
                    <Header/>
                    <Labirint/>
                    {(props.endGame) ? 
                        <EndGame win={props.win} /> :
                        <Trajectory />
                    }
                </div>
            );
            break;
        default: return(<></>)        
    }

}

const Main = connect(mapStateToProps(), mapDispatchToProps)(Main_i);
export default Main;