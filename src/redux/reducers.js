import * as actionTypes from './actionTypes.js'

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state = initialStateSearch, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload
			}
		default:
			return state
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''

}

export const requestRobots = (state = initialStateRobots, action) => {
	switch (action.type) {
		case actionTypes.REQUEST_ROBOTS_PENDING:
			return {
				...state,
				isPending: true
			}
		case actionTypes.REQUEST_ROBOTS_SUCCESS:
			return {
				...state,
				robots: action.payload,
				isPending: false
			}
		case actionTypes.REQUEST_ROBOTS_FAILED:
			return {
				...state,
				error: action.payload,
				isPending: false
			}
		default:
			return state
	}
}