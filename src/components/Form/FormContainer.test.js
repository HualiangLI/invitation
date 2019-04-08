import React from 'react'
import { shallow } from 'enzyme'
import FormContainer from './FormContainer'

describe('FormContainer', () => {
  it('should has error if submitted user is blank', function () {
    const wrapper = shallow(<FormContainer onSuccess={jest.fn()}/>).instance()
    wrapper.handleSubmit({})
    expect(wrapper.state.errMsg.length).toBeGreaterThan(0)
  })

  it('should has error if submitted email is unrecognized', function () {
    const wrapper = shallow(<FormContainer onSuccess={jest.fn()}/>).instance()
    wrapper.handleSubmit({ name: 'test', email: 'gmail.com', confirmEmail: 'gmail.com' })
    expect(wrapper.state.errMsg.length).toBeGreaterThan(0)
  })

  it('should has error if submitted confirmEmail does not match email', function () {
    const wrapper = shallow(<FormContainer onSuccess={jest.fn()}/>).instance()
    wrapper.handleSubmit({ name: 'test', email: '123@gmail.com', confirmEmail: '2@gmail.com' })
    expect(wrapper.state.errMsg.length).toBeGreaterThan(0)
  })

  it('should has error if email is usedemail@airwallex.com', function () {
    const wrapper = shallow(<FormContainer onSuccess={jest.fn()}/>).instance()
    return wrapper.requestInvitation({ name: 'test', email: 'usedemail@airwallex.com' })
      .then(() => expect(wrapper.state.errMsg.length).toBeGreaterThan(0))
  })

  it('should call onSuccess if submit succeed', function () {
    const onSuccess = jest.fn()
    const wrapper = shallow(<FormContainer onSuccess={onSuccess}/>).instance()
    return wrapper.requestInvitation({ name: 'test', email: 'example@example.com' })
      .then(() => expect(onSuccess).toBeCalled())
  })
})
