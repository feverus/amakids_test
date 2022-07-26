import * as I from '../storeInterfaces';

export function generateNewGame(value: I.StateSet):I.ActionSet {
	return {
		type: "GENERATE_NEW_GAME",
		payload: value
	}
}
export function changeLabirint(value: I.StateLabirint):I.ActionLabirint {
	return {
		type: "CHANGE_LABIRINT_CELL_VALUE",
		payload: value,
	}
}