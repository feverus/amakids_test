import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsHeader as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import S from '../styles/header.module.css'

type P = I.PropsStateHeader & I.PropsDispaich;

function Header_i(props:P) {
    let status = '😐'
    if (props.gamesWinned===props.gamesPlayed) status = '😎'
    if (props.gamesWinned<(props.gamesPlayed)) status = '😀'
    if (props.gamesWinned<(props.gamesPlayed / 2)) status = '😥'
    if (props.gamesWinned<(props.gamesPlayed / 10)) status = '😴'
    return (
        <div className={S.stat}>
            Статистика побед: {props.gamesWinned}/{props.gamesPlayed} {status}
        </div>
    );
}

const Header = connect(mapStateToProps(), mapDispatchToProps)(Header_i);
export default Header;