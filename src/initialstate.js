/** @jsx React.DOM */

var MyState = React.createClass({
  getInitialState: function() {
    return {
      name: "Matt"
    }
  },
  render: function() {
    return(
      <div>
        <h1>2. Initial state:</h1>
        <p>Hello {this.state.name}</p>
      </div>
    );
  }
});

React.render(<MyState />, document.getElementById('state'));