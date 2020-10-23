import React from 'react'
import CounterButton from './index'
import { shallow } from 'enzyme'


it('expect to render CounterButton component', () => {

	const mockColor = "red"
	const counterBtn = shallow(<CounterButton color={mockColor} />)
	expect(counterBtn).toMatchSnapshot();
})

it('correct increment count', () => {

	const mockColor = "red"
	const wrapper = shallow(<CounterButton color={mockColor} />)

	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 1 })

	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 2 })

	wrapper.find('[id="counter"]').simulate('keypress')
	expect(wrapper.state()).toEqual({ count: 2 })

	expect(wrapper.props().color).toEqual('red')
})