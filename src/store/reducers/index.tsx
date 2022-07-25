import { combineReducers } from 'redux';
import r_set from './r_set';
import r_labirint from './r_labirint';

export default combineReducers({
    set: r_set,
    labirint: r_labirint,
})