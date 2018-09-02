import {
	combineReducers
} from 'redux';

export default combineReducers({
	transactions: require('./transactions').default,
});