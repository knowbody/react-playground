/** @jsx React.DOM */

var MyState = React.createClass({displayName: 'MyState',
  getInitialState: function() {
    return {
      name: "Matt"
    }
  },
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, "2. Initial state:"), 
        React.createElement("p", null, "Hello ", this.state.name)
      )
    );
  }
});

React.render(React.createElement(MyState, null), document.getElementById('state'));