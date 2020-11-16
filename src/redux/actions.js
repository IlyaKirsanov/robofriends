import * as actionTypes from './actionTypes.js'
import {apiCall} from '../api/api'

export const setSearchField = (text) => ({
	type: actionTypes.CHANGE_SEARCH_FIELD,
	payload: text
})


export const requestRobots = () => (dispatch) => {
	dispatch({type: actionTypes.REQUEST_ROBOTS_PENDING})
	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(data => dispatch({ type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: actionTypes.REQUEST_ROBOTS_FAILED, payload: error }))
}

