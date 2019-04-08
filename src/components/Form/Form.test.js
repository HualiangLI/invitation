import React from 'react'
import { mount, shallow } from 'enzyme'
import Form from './Form'

describe('Form', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Form onSubmit={jest.fn()} errMsg='you have errors' loading={false} />)
    expect(wrapper.render()).toMatchSnapshot()
  })

  it('should not call onSubmit when loading', function () {
    const onSubmit = jest.fn()
    const wrapper = shallow(<Form onSubmit={onSubmit} errMsg='you have errors' loading={true} />)
    wrapper.find('button').simulate('click')
    expect(onSubmit).not.toBeCalled()
  })

  it('should submit object with full name, email and confirmEmail', function () {
    const onSubmit = jest.fn()
    const state = { name: 'test name', email: 'test email', confirmEmail: 'test confirmEmail' }
    const wrapper = shallow(<Form onSubmit={onSubmit} errMsg='' loading={false} />)
    wrapper.setState(state)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(onSubmit).toBeCalledWith(expect.objectContaining(state))
  })
})
