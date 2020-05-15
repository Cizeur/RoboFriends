import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
	searchField: '',
}

export const searchRobots = (state=initialState, acion={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload }
			//return Object.assign({}, state, searchField: action.payload);
		default:
			return state;
	}
}
