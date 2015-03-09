/** @jsx React.DOM */

var Parent = React.createClass({displayName: 'Parent',
  getInitialState: function() {
    return {
      name: "I'm a parent",
      age: 13
    }
  },
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("p", null, "Hello, ", this.state.name), 
        React.createElement(Child, {age: this.state.age})
      )
    );
  }
});

var Child = React.createClass({displayName: 'Child',
  render: function() {
    return (
      React.createElement("p", null, "and this is a child which is ", this.props.age, " years old.")
    );
  }
});


React.render(React.createElement(Parent, null), document.getElementById('childState'));