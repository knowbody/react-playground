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
        <p>Hello {this.state.name}</p>
      </div>
    );
  }
});

React.render(<MyState />, document.getElementById('state'));