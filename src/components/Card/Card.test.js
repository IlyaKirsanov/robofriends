import React from 'react'
import Card from '../Card/index'
import {shallow} from 'enzyme'


it('expect to render Card component', () =>{
	expect(shallow(<Card/>).length).toEqual(1)
})