import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_labirint(state: I.StateLabirint = initialState.labirint, action: I.ActionLabirint): I.StateLabirint {
	switch(action.type) {
		case "ON_CHANGE_SAMPLE": {
			return {...state
			}        
		} 
		default: return state;
	}
}