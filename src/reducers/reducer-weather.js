import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// the state never has to be mutated
			// instead we should return a new state
			// use concat instead of push!!!
			return state.concat(action.payload.data);
	}

	return state;
}