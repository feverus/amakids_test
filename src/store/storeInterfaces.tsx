// типы данных для хранилища



export enum Moves { 'up', 'right', 'down', 'left' }

export interface StateSet {
	page: string;
	movesOnTrajectory: number;
	labirintSize: Array<number>;
	labirintEnter: Array<number>;
	labirintExit: Array<number>;
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
}
export interface PropsStateHeader {
	gamesPlayed: number;
	gamesWinned: number;
}
export interface PropsStateLabirint {
	labirintMap: Array<Array<string>>;
}
export interface PropsStateTrajectory {
	trajectory: Array<string>;
}


//функции для mapDispatchToProps

export interface PropsDispaich {
	doStartGame: Function; 
	generateNewGame: Function; 
	onCellClick: Function; 
}