import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  it('should render correctly', function () {
    const wrapper = mount(<App />)
    expect(wrapper.render()).toMatchSnapshot()
  })

  it('should show inviting form dialog after click \'Request an invite\' button', function () {
    const wrapper = shallow(<App />)
    wrapper.find('main button').simulate('click')
    expect(wrapper.instance().state.formDialogVis).toBe(true)
  })

  it('should show success dialog after submitting success', function () {
    const wrapper = mount(<App />)
    wrapper.instance().handleFormSubmitSuccess()
    expect(wrapper.instance().state.successDialogVis).toBe(true)
  })
})
