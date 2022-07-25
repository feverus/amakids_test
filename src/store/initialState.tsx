import * as I from './storeInterfaces';

const initialState: I.StateAll = {
	set: {
		page: '',
		movesOnTrajectory: 10,
		labirintSize: {X:1, Y:1},
		labirintEnter: {X:1, Y:1},
		labirintExit: {X:1, Y:1},
		gamesPlayed: 0,
		gamesWinned: 0,
	},
	labirint: {
		map: [['']],
		Trajectory: [I.Moves.up],
	}
};

export default initialState;