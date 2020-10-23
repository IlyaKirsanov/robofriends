import React from 'react'
import Card from './index'
import {shallow} from 'enzyme'


it('expect to render Card component', () =>{
	const card = shallow(<Card />)
	expect(card).toMatchSnapshot();
})