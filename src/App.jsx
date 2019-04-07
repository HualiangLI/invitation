/**
 * Created by 李华良 on 2019/4/7
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, Form } from './components'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formDialogVis: false,
      successDialogVis: false,
    }
  }

  showInvitationForm = e => {
    this.setState({
      formDialogVis: true,
    })
  }

  handleFormSubmitSuccess = () => {
    this.setState({
      formDialogVis: false,
      successDialogVis: true,
    })
  }

  handleFormDialogClose = () => {
    this.setState({
      formDialogVis: false,
    })
  }

  handleSuccessDialogClose = () => {
    this.setState({
      successDialogVis: false,
    })
  }

  render() {
    const {
      formDialogVis,
      successDialogVis,
    } = this.state

    return (
      <section className="app">
        <nav>BROCCOLI & CO.</nav>
        <main>
          <p className="slogan">A better way to enjoy every day.</p>
          <p>Be the first to know when we launch.</p>
          <button onClick={this.showInvitationForm}>Request an invite</button>
        </main>
        <footer>
          <p>Made with ❤️ in Melbourne.</p>
          <p>@ 2016 Broccoli & Co. All right reserved.</p>
        </footer>
        {formDialogVis && (
          <Dialog header="Request an invite" onClose={this.handleFormDialogClose}>
            <Form onSuccess={this.handleFormSubmitSuccess} />
          </Dialog>
        )}
        {successDialogVis && (
          <Dialog header="All done!" onClose={this.handleSuccessDialogClose}>
            <p className="success-message">Your will be one of the first to experience Broccoli & Co. when we launched.</p>
          </Dialog>
        )}
      </section>
    )
  }
}

App.propTypes = {
}

export default App
