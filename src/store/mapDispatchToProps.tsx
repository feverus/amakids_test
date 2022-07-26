import { bindActionCreators, Dispatch } from 'redux';
import * as Set from './actions/a_set';
import * as Labirint from './actions/a_labirint';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			doStartGame: bindActionCreators(Set.startGame, dispatch),
			generateNewGame: bindActionCreators(Labirint.generateNewGame, dispatch),
			onCellClick: bindActionCreators(Set.onCellClick, dispatch),
			changeLabirint: bindActionCreators(Labirint.changeLabirint, dispatch),			
		}
	}
}