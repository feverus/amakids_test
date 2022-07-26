import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import r from '../function/randomInt'
import generateTrajectory from '../function/generateTrajectory'
import S from '../styles/mainMenu.module.css'

type P = I.PropsDispaich;

function MainMenu_i(props:P) {
    const chooseLevel = (level: string) =>  {
        let movesOnTrajectory = 10
        let x = 3
        let y = 3
        if (level === 'hard') {
            movesOnTrajectory = 20
            x = 10
            y = 10
        }
        if (level === 'simple') {
            movesOnTrajectory = 2
            x = 2
            y = 2
        }
        let newGameData = generateTrajectory({movesOnTrajectory: movesOnTrajectory, labirintSize: [x, y], labirintEnter: [r(x), r(y)]});
        props.doStartGame({page:'game', movesOnTrajectory: movesOnTrajectory, labirintSize: [x, y], labirintEnter: newGameData.labirintEnter, labirintExit: newGameData.labirintExit, gamesPlayed: 0, gamesWinned: 0});      
        props.generateNewGame({labirintMap:newGameData.labirintMap, trajectory:newGameData.trajectory}) 
    }


    return (
        <div className={S.buttonBlock}>
            Выбрать сложность:
            <button className = {S.button} onClick={() => chooseLevel('simple')}>Легкая</button>
            <button className = {S.button} onClick={() => chooseLevel('normal')}>Нормальная</button>
            <button className = {S.button} onClick={() => chooseLevel('hard')}>Сложная</button>            
        </div>
    );
}

const MainMenu = connect(null, mapDispatchToProps)(MainMenu_i);
export default MainMenu;