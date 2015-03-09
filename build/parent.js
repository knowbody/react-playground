/** @jsx React.DOM */

var Parent = React.createClass({displayName: 'Parent',
  getInitialState: function() {
    return {
      name: "I'm a parent"
    }
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "Hello, ", this.state.name), 
        React.createElement(Child, null)
      )
    );
  }
});

var Child = React.createClass({displayName: 'Child',
  render: function() {
    return (
      React.createElement("p", null, "and this is a child")
    );
  }
});


React.render(React.createElement(Parent, null), document.getElementById('parent'));