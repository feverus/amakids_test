import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
	switch(action.type) {
		case "DO_START_GAME": {
			return {...state, ...action.payload,  endGame:false
			}        
		} 
		case "ON_CELL_CLICK": {
			let gamesWinned = state.gamesWinned
			if (action.payload.win) gamesWinned++
			return {...state, win:action.payload.win, endGame: true, gamesPlayed:state.gamesPlayed+1, gamesWinned:gamesWinned, clickedCell:action.payload.clickedCell}        
		} 
		default: return state;
	}
}