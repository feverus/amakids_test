import * as I from '../storeInterfaces';

export function generateNewGame(value: I.StateSet):I.ActionSet {
	return {
		type: "GENERATE_NEW_GAME",
		payload: value
	}
}