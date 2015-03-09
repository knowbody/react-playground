/** @jsx React.DOM */

var Parent = React.createClass({
  getInitialState: function() {
    return {
      name: "I'm a parent"
    }
  },
  render: function() {
    return (
      <div>
        <p>Hello, {this.state.name}</p>
        <Child />
      </div>
    );
  }
});

var Child = React.createClass({
  render: function() {
    return (
      <p>and this is a child</p>
    );
  }
});


React.render(<Parent />, document.getElementById('parent'));