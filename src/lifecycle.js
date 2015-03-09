/** @jsx React.DOM */

var ItemsContainer = React.createClass({
  getInitialState: function() {
    return {
      name: 'knowbody'
    }
  },

  // this function is invoked once, before the first render
  // calling setState doesn't re-render
  componentWillMount: function() {
    alert('component WILL mount');
  },

  // this function is invoked once, after the first render
  // access to this.getDOMNode()
  componentDidMount: function() {
    alert('component DID mount');
  },

  // is called before render
  // this function is invoked when there is props change
  // is not called for initial render, previous props accessed by this.props
  // calling setState doesn't re-render
  componentWillReceiveProps: function(nextProps) {
    alert('component will receive PROPS');
  },

  // this function is invoked just before a component is unmounted
  componentWillUnmount: function() {
    alert('component WILL UNMOUNT');
  },

  render: function() {
    return (
      <div>
        <h1>6. Lifecycle:</h1>
        <p>Welcome {this.state.name}!</p>
      </div>
    );
  }
});

React.render(<ItemsContainer />, document.getElementById('lifecycle'));