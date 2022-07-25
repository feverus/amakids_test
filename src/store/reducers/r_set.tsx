import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
	switch(action.type) {
		case "DO_START_GAME": {
			return {...action.payload
			}        
		} 
		default: return state;
	}
}