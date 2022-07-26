import * as I from './storeInterfaces';

const initialState: I.StateAll = {
	set: {
		page: 'start',
		endGame: false,
		win: false,
		movesOnTrajectory: 10,
		labirintSize: [1, 1],
		labirintEnter: [1, 1],
		labirintExit: [1, 1],
		clickedCell: [1, 1],
		gamesPlayed: 0,
		gamesWinned: 0,
	},
	labirint: {
		labirintMap: [['']],
		trajectory: [''],
	}
};

export default initialState;