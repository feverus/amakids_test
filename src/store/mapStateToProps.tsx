import * as I from './storeInterfaces';

export function mapStateToPropsSample() {
	return function (state: I.StateAll):I.PropsStateSample {
		return {
			sample: state.set.sample,
		}
	}
}
