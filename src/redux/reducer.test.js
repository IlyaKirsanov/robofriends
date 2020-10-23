import * as actionTypes from './actionTypes.js'
import * as reducers from './reducers.js'

describe('searchRobots', () => {

	const initialState = {
		searchField: ''
	}
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
	})
	it('should handle CHANGE_SEARCHFIELD', () => {
		expect(reducers.searchRobots(initialState, {
			type: actionTypes.CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	})
})


describe('requestRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false,
		error: ''
	}

	it('[requestRobots] should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual({ ...initialStateRobots })
	})

	it('[requestRobots] should handle REQUEST_ROBOTS_PENDING action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: actionTypes.REQUEST_ROBOTS_PENDING
		})).toEqual({
			robots: [],
			error: '',
			isPending: true
		})
	})

	it('[requestRobots] should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: actionTypes.REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '123',
				name: 'Test',
				email: 'test@gmail.com'
			}]
		})).toEqual({
			robots: [{
				id: '123',
				name: 'Test',
				email: 'test@gmail.com'
			}],
			error: '',
			isPending: false
		})
	})

	it('[requestRobots] should handle REQUEST_ROBOTS_FAILED action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: actionTypes.REQUEST_ROBOTS_FAILED,
			payload: 'NOOOOOO'
		})).toEqual({
			robots: [],
			error: 'NOOOOOO',
			isPending: false
		})
	})
})