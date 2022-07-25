import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsHeader as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsStateHeader & I.PropsDispaich;

function Header_i(props:P) {
    return (
        <>
            Статистика побед: {props.gamesWinned}/{props.gamesPlayed}
        </>
    );
}

const Header = connect(mapStateToProps(), mapDispatchToProps)(Header_i);
export default Header;