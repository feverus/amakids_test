import * as I from '../storeInterfaces';

export function onChangeSample(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_SAMPLE",
		payload: value
	}
}