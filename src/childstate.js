/** @jsx React.DOM */

var Parent = React.createClass({
  getInitialState: function() {
    return {
      name: "I'm a parent",
      age: 13
    }
  },
  render: function() {
    return (
      <div>
        <p>Hello, {this.state.name}</p>
        <Child age={this.state.age} />
      </div>
    );
  }
});

var Child = React.createClass({
  render: function() {
    return (
      <p>and this is a child which is {this.props.age} years old.</p>
    );
  }
});


React.render(<Parent />, document.getElementById('childState'));