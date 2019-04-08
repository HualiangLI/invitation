/**
 * Created by 李华良 on 2019/4/7
 */
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Form from './Form'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errMsg: '',
      loading: false,
    }
  }

  handleSubmit = ({ name, email, confirmEmail }) => {
    let errMsg = ''
    if (!name) errMsg = 'Please input your full name.'
    else if (!email) errMsg = 'Please input your email.'
    else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) errMsg = 'Unrecognized email.'
    else if (!confirmEmail) errMsg = 'Please confirm your inputted email.'
    else if (email !== confirmEmail) errMsg = 'Email doesn\'t match.'
    if (errMsg) {
      this.setState({ errMsg })
      return Promise.resolve()
    }
    this.requestInvitation({ name, email })
  }

  requestInvitation(data) {
    this.setState({ loading: true })
    return axios.post(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(() => new Promise((resolve, reject) => {
          this.setState({ loading: false }, resolve)
        }))
      .then(this.props.onSuccess)
      .catch(err => {
        let errMsg = 'Request failed.'
        if (err.response && err.response.data) errMsg = err.response.data.errorMessage
        else if (err.message) errMsg = err.message
        this.setState({ errMsg, loading: false })
      })
  }

  render() {
    const {
      errMsg,
      loading
    } = this.state
    return (
      <Form onSubmit={this.handleSubmit} errMsg={errMsg} loading={loading}/>
    )
  }
}

FormContainer.propTypes = {
  onSuccess: PropTypes.func.isRequired
}

export default FormContainer
