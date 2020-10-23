import React from 'react'
import MainPage from './index.js'
import { shallow } from 'enzyme'


let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}

	wrapper = shallow(<MainPage {...mockProps}/>)
})

it('render MainPage without crashing', ()=>{
	expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', ()=>{

	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [
			{id: 3, name: 'John', email: 'john@test.com'}
		],
		searchField: 'john',
		isPending: false
	}

	
	expect(wrapper.instance().filteredRobots([])).toEqual([])

	let wrapper2 = shallow(<MainPage {...mockProps2} />)
	expect(wrapper.instance().filteredRobots([])).toEqual([])
})