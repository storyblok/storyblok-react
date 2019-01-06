'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SbEditable = function (_React$Component) {
  _inherits(SbEditable, _React$Component);

  function SbEditable(props) {
    _classCallCheck(this, SbEditable);

    return _possibleConstructorReturn(this, (SbEditable.__proto__ || Object.getPrototypeOf(SbEditable)).call(this, props));
  }

  _createClass(SbEditable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.content._editable === 'undefined' || window && window.location === window.parent.location) {
        return;
      }

      var el = _reactDom2.default.findDOMNode(this);
      var options = JSON.parse(this.props.content._editable.replace('<!--#storyblok#', '').replace('-->', ''));

      if (typeof el.setAttribute === 'function') {
        el.setAttribute('data-blok-c', JSON.stringify(options));
        el.setAttribute('data-blok-uid', options.id + '-' + options.uid);

        this.addClass(el, 'storyblok__outline');
      } else {
        console.warn('I seams that you are using a text dom element inside the SbEditable wrapper. Please wrap it with a HTML dom element.');
      }
    }
  }, {
    key: 'addClass',
    value: function addClass(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else if (!new RegExp('\\b' + className + '\\b').test(el.className)) {
        el.className += ' ' + className;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return SbEditable;
}(_react2.default.Component);

exports.default = SbEditable;