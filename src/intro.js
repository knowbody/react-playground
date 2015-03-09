/** @jsx React.DOM */

var Intro = React.createClass({
  render: function() {
    return (
      <h1>React intro</h1>
    );
  }
});

React.render(<Intro />, document.getElementById('app'));