import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import r from '../function/randomInt'
import generateTrajectory from '../function/generateTrajectory'
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
            x = 1
            y = 1
        }

        props.doStartGame({page:'game', movesOnTrajectory: movesOnTrajectory, labirintSize: [x, y], labirintEnter: [r(x), r(y)], labirintExit: [1, 1], gamesPlayed: 0, gamesWinned: 0});        
    }

    let a = generateTrajectory({movesOnTrajectory: 10, labirintSize: [3, 3], labirintEnter: [3, 3]})
    console.log(a)

    return (
        <>
        Выбрать сложность:
        <button onClick={() => chooseLevel('simple')}>Легкая</button>
        <button onClick={() => chooseLevel('normal')}>Нормальная</button>
        <button onClick={() => chooseLevel('hard')}>Сложная</button>
        
        </>
    );
}

const MainMenu = connect(null, mapDispatchToProps)(MainMenu_i);
export default MainMenu;