import * as actionTypes from './actionTypes.js'
import * as actions from './actions.js'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
 

const mockStore = configureMockStore([thunkMiddleware])
it('should create an action to search robots', () => {
	const text = 'woo'
	const expectedAction = {
		type: actionTypes.CHANGE_SEARCH_FIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
	const store = mockStore()
	store.dispatch(actions.requestRobots())
	const action = store.getActions()
	const expectedAction = {
		type: actionTypes.REQUEST_ROBOTS_PENDING,
	}
	expect(action[0]).toEqual(expectedAction)
})
