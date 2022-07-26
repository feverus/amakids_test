import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsEndGame as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import r from '../function/randomInt'
import generateTrajectory from '../function/generateTrajectory'
import S from '../styles/endGame.module.css'
import SmainMenu from '../styles/mainMenu.module.css'

type P = I.PropsStateEndGame & I.PropsDispaich & {win:boolean};

function EndGame_i(props:P) {
    const nextGame = () =>  {
        let size = props.labirintSize
        let newGameData = generateTrajectory({movesOnTrajectory: props.movesOnTrajectory, labirintSize: size, labirintEnter: [r(size[0]), r(size[1])]});
        props.doStartGame({page:'game', movesOnTrajectory: props.movesOnTrajectory, labirintSize: size, labirintEnter: newGameData.labirintEnter, labirintExit: newGameData.labirintExit, gamesPlayed: props.gamesPlayed, gamesWinned: props.gamesWinned});      
        props.generateNewGame({labirintMap:newGameData.labirintMap, trajectory:newGameData.trajectory}) 
    }
    return (
        <div className={S.block}>
        {(props.win) ? 'Ура, Вы победили!' : 'Не растраивайтесь, повезет в другой раз.'}
            <button className={SmainMenu.button} onClick={() => nextGame()}>Играть еще</button>
        </div>
    );
}   

const EndGam = connect(mapStateToProps, mapDispatchToProps)(EndGame_i);
export default EndGam;