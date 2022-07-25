import { bindActionCreators, Dispatch } from 'redux';
import * as Set from './actions/a_set';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			onChangeSample: bindActionCreators(Set.onChangeSample, dispatch),
		}
	}
}