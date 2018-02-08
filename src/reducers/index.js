import { combineReducers } from 'redux';
import ReducerWeather from './reducer-weather';

const rootReducer = combineReducers({
	weather: ReducerWeather
});

export default rootReducer;
