import * as actionTypes from './actionTypes.js'

export const setSearchField = (text) => ({
	type: actionTypes.CHANGE_SEARCH_FIELD,
	payload: text
})