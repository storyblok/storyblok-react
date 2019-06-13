import React from 'react'
import ReactDOM from 'react-dom'

class SbEditable extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (typeof this.props.content._editable === 'undefined' ||
        (window && window.location === window.parent.location)) {
      return
    }

    var el = ReactDOM.findDOMNode(this)
    var options = JSON.parse(this.props.content._editable.replace('<!--#storyblok#', '').replace('-->', ''))

    if (el instanceof Object && typeof el.setAttribute === 'function') {
      el.setAttribute('data-blok-c', JSON.stringify(options))
      el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

      this.addClass(el, 'storyblok__outline')
    } else {
      console.warn('I seams that you are using a text dom element inside the SbEditable wrapper. Please wrap it with a HTML dom element.')
    }
  }

  addClass(el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!new RegExp('\\b'+ className+'\\b').test(el.className)) {
      el.className += ' ' + className
    }
  }

  render() {
    return this.props.children
  }
}

export default SbEditable
