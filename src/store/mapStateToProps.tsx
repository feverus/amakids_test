import * as I from './storeInterfaces';

export function mapStateToPropsMain() {
	return function (state: I.StateAll):I.PropsStateMain {
		return {
			page: state.set.page,
			endGame: state.set.endGame,
			win: state.set.win,
		}
	}

}
export function mapStateToPropsHeader() {
	return function (state: I.StateAll):I.PropsStateHeader {
		return {
			gamesPlayed: state.set.gamesPlayed,
			gamesWinned: state.set.gamesWinned,
		}
	}
}
export function mapStateToPropsLabirint() {
	return function (state: I.StateAll):I.PropsStateLabirint {
		return {
			labirintMap: state.labirint.labirintMap,
		}
	}
}
export function mapStateToPropsLabirintCell() {
	return function (state: I.StateAll):I.PropsStateLabirintCell {
		return {
			labirintExit: state.set.labirintExit,
		}
	}
}
export function mapStateToPropsTrajectory() {
	return function (state: I.StateAll):I.PropsStateTrajectory {
		return {
			trajectory: state.labirint.trajectory,
		}
	}
}
export function mapStateToPropsEndGame() {
	return function (state: I.StateAll):I.PropsStateEndGame {
		return {
			movesOnTrajectory: state.set.movesOnTrajectory,
			labirintSize: state.set.labirintSize,
			gamesPlayed: state.set.gamesPlayed,
			gamesWinned: state.set.gamesWinned,
		}
	}
}