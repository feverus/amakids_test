import * as I from '../storeInterfaces';

export function startGame(value: I.StateSet):I.ActionSet {
	return {
		type: "DO_START_GAME",
		payload: value
	}
}
export function onCellClick(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CELL_CLICK",
		payload: value
	}
}