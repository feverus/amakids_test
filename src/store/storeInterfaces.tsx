// типы данных для хранилища

export interface StateSet {
    sample: string;
}

export interface StateAll {
    set:StateSet;
}



// экшены

export interface ActionSet {
	type: string;
	payload: StateSet;
}



//props для mapStateToProps

export interface PropsStateSample {
	sample: string;
}



//функции для mapDispatchToProps

export interface PropsDispaich {
	onChangeSample: Function; 
}