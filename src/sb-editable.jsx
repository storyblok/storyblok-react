import React from 'react'
import ReactDOM from 'react-dom'

class SbEditable extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.addPropsOnChildren()
  }

  componentDidUpdate() {
    this.addPropsOnChildren()
  }

  addPropsOnChildren() {
    if (typeof this.props.content._editable === 'undefined' ||
        window.location === window.parent.location) {
      return
    }

    const el = ReactDOM.findDOMNode(this)
    const options = JSON.parse(this.props.content._editable.replace(/^<!--#storyblok#/, '').replace(/-->$/, ''))

    if (el instanceof Object && typeof el.setAttribute === 'function') {
      el.setAttribute('data-blok-c', JSON.stringify(options))
      el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

      this.addClass(el, 'storyblok__outline')
    } else {
      console.warn('It seems that you are using a DOM text-node inside the SbEditable wrapper. Please wrap it with an HTML DOM element.', this.props.children)
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
