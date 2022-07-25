import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_labirint(state: I.StateLabirint = initialState.labirint, action: I.ActionLabirint): I.StateLabirint {
	switch(action.type) {
		case "GENERATE_NEW_GAME": {
			return {...action.payload}        
		}
		default: return state;
	}
}