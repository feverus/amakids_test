// типы данных для хранилища



export enum Moves { 'up', 'right', 'down', 'left' }

export interface StateSet {
	page: string;
	endGame: boolean;
	win: boolean;
	movesOnTrajectory: number;
	labirintSize: Array<number>;
	labirintEnter: Array<number>;
	labirintExit: Array<number>;
	clickedCell: Array<number>;
	gamesPlayed: number;
	gamesWinned: number;
}

export interface StateLabirint {
    labirintMap: Array<Array<string>>;
	trajectory: Array<string>;
}




export interface StateAll {
    set:StateSet;
	labirint:StateLabirint;
}



// экшены

export interface ActionSet {
	type: string;
	payload: StateSet;
}
export interface ActionLabirint {
	type: string;
	payload: StateLabirint;
}


//props для mapStateToProps

export interface PropsStateMain {
	page: string;
	endGame: boolean;
	win: boolean;
}
export interface PropsStateHeader {
	gamesPlayed: number;
	gamesWinned: number;
}
export interface PropsStateLabirint {
	endGame: boolean;
	labirintMap: Array<Array<string>>;
	labirintEnter: Array<number>;
	labirintExit: Array<number>;
	clickedCell: Array<number>;
	trajectory: Array<string>;
}
export interface PropsStateLabirintCell {
	labirintExit: Array<number>;
	endGame: boolean;
}
export interface PropsStateTrajectory {
	trajectory: Array<string>;
}
export interface PropsStateEndGame {
	movesOnTrajectory: number;
	labirintSize: Array<number>;
	gamesPlayed: number;
	gamesWinned: number;
}


//функции для mapDispatchToProps

export interface PropsDispaich {
	doStartGame: Function; 
	generateNewGame: Function; 
	onCellClick: Function; 
	changeLabirint: Function; 
}