import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsHeader as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import S from '../styles/header.module.css'

type P = I.PropsStateHeader & I.PropsDispaich;

function Header_i(props:P) {
    return (
        <div className={S.stat}>
            Статистика побед: {props.gamesWinned}/{props.gamesPlayed}
        </div>
    );
}

const Header = connect(mapStateToProps(), mapDispatchToProps)(Header_i);
export default Header;