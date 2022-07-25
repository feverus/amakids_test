import * as I from './storeInterfaces';

export function mapStateToPropsMain() {
	return function (state: I.StateAll):I.PropsStateMain {
		return {
			page: state.set.page,
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
export function mapStateToPropsTrajectory() {
	return function (state: I.StateAll):I.PropsStateTrajectory {
		return {
			trajectory: state.labirint.trajectory,
		}
	}
}