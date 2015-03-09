/** @jsx React.DOM */
var React = require('react');

var Intro = React.createClass({displayName: 'Intro',
  render: function() {
    return (
      React.createElement("h1", null, "React intro")
    );
  }
});

React.render(React.createElement(Intro, null), document.getElementById('app'));