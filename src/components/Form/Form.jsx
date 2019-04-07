/**
 * Created by 李华良 on 2019/4/7
 */
import React from 'react'
import PropTypes from 'prop-types'
import './Form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      confirmEmail: '',
    }
  }

  handleFullNameChange = e => {
    this.setState({ name: e.target.value })
  }
  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  handleConfirmEmailChange = e => {
    this.setState({ confirmEmail: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {
      onSubmit,
    } = this.props
    const {
      name,
      email,
      confirmEmail,
    } = this.state
    onSubmit({
      name,
      email,
      confirmEmail,
    })
  }

  render() {
    const {
      name,
      email,
      confirmEmail,
    } = this.state

    const {
      errMsg,
      loading,
    } = this.props

    const isBtnDisabled = loading

    return (
      <form className="comp__form" onSubmit={this.handleFormSubmit}>
        <div className="form-item">
          <input type="text" placeholder="Full name" value={name} onChange={this.handleFullNameChange}/>
        </div>
        <div className="form-item">
          <input type="text" placeholder="Email" value={email} onChange={this.handleEmailChange}/>
        </div>
        <div className="form-item">
          <input type="text" placeholder="Confirm email" value={confirmEmail} onChange={this.handleConfirmEmailChange}/>
        </div>
        <div className="form-btn-row">
          <button type="submit" disabled={isBtnDisabled}>{ loading ? 'Sending, please wait...' : 'Send' }</button>
        </div>
        {errMsg && (
          <p className="form-errs">{ errMsg }</p>
        )}
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Form
