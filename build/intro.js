/** @jsx React.DOM */

var Intro = React.createClass({displayName: 'Intro',
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "1. Intro:"), 
        React.createElement("p", null, "Hello React")
      )
    );
  }
});

React.render(React.createElement(Intro, null), document.getElementById('intro'));