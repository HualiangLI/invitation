import React from 'react'
import { mount, shallow } from 'enzyme'
import Dialog from './Dialog'

describe('Dialog', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Dialog header="header" onClose={jest.fn()}/>)

    expect(wrapper.render()).toMatchSnapshot()
  })

  it('onClose should be called', () => {
    const onClose = jest.fn()
    const wrapper = shallow(<Dialog header="header" onClose={onClose}/>)
    wrapper.find('.btn-close').simulate('click')
    expect(onClose).toBeCalled()
  })
})
