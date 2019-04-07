/**
 * Created by 李华良 on 2019/4/7
 */
import React from 'react'
import PropTypes from 'prop-types'
import './Dialog.scss'

class Dialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const {
      header,
      children,
      footer,
      onClose,
    } = this.props

    return (
      <div className="comp__dialog">
        <div className="dialog-content">
          <div className="header">
            { header }
            <span className="btn-close" onClick={onClose}>X</span>
          </div>
          <div className="body">{ children }</div>
          {footer && (
            <div className="footer">{ footer }</div>
          )}
        </div>
      </div>
    )
  }
}

Dialog.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

Dialog.defaultProps = {
  footer: null
}

export default Dialog
