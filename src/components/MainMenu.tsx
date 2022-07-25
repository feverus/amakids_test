import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsDispaich;

function MainMenu_i(props:P) {
    function r(max:number) {
        return Math.floor(Math.random() * max + 1);
    }
    const chooseLevel = (level: string) =>  {
        switch(level) {
            case 'normal': {
                props.doStartGame({page:'game', movesOnTrajectory: 10, labirintSize: [3, 3], labirintEnter: [r, r], labirintExit: [1, 1], gamesPlayed: 0, gamesWinned: 0});
            }
            break;
            case 'hard': {
                props.doStartGame({page:'game', movesOnTrajectory: 20, labirintSize: [10, 10], labirintEnter: [r, r], labirintExit: [1, 1], gamesPlayed: 0, gamesWinned: 0});
            }
            break;
            case 'simple': {
                props.doStartGame({page:'game', movesOnTrajectory: 1, labirintSize: [2, 2], labirintEnter: [r, r], labirintExit: [1, 1], gamesPlayed: 0, gamesWinned: 0});
            }
            break;
            default: props.doStartGame({page:'game', movesOnTrajectory: 10, labirintSize: [3, 3], labirintEnter: [r, r], labirintExit: [1, 1], gamesPlayed: 0, gamesWinned: 0});
        }
        
    }
    return (
        <>
        Выбрать сложность:
        <button onClick={() => chooseLevel('simple')}>Легкая</button>
        <button onClick={() => chooseLevel('normal')}>Нормальная</button>
        <button onClick={() => chooseLevel('hard')}>Сложная</button>
        </>
    );
}

const MainMenu = connect(mapDispatchToProps)(MainMenu_i);
export default MainMenu;