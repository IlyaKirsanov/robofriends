import React from 'react'
import CardList from './index'
import { shallow } from 'enzyme'


it('expect to render CardList component', () => {
	
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]

	const cardList = shallow(<CardList robots={mockRobots} />)
	expect(cardList).toMatchSnapshot();
})