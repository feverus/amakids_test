import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsSample as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsStateSample & I.PropsDispaich;

function Sample_i(props:P) {
	return (
		<></>
	)
}

const Sample = connect(mapStateToProps(), mapDispatchToProps)(Sample_i);
export default Sample;