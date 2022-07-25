import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
	switch(action.type) {
		case "ON_CHANGE_SAMPLE": {
			return {...state,
				sample: action.payload.sample
			}        
		} 
		default: return state;
	}
}