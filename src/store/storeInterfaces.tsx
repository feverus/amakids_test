// типы данных для хранилища


export interface LabirintCell {
    X: number;
    Y: number;
}
export enum Moves { 'up', 'right', 'down', 'left' }

export interface StateSet {
	page: string;
	movesOnTrajectory: number;
	labirintSize: LabirintCell;
	labirintEnter: LabirintCell;
	labirintExit: LabirintCell;
	gamesPlayed: number;
	gamesWinned: number;
}

export interface StateLabirint {
    map: Array<Array<string>>;
	Trajectory: Array<Moves>;
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
	payload: StateSet;
}


//props для mapStateToProps

export interface PropsStateMain {
	page: string;
}



//функции для mapDispatchToProps

export interface PropsDispaich {
	onChangePage: Function; 
}