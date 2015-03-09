/** @jsx React.DOM */

var Intro = React.createClass({
  render: function() {
    return (
      <div>
        <h1>1. Intro:</h1>
        <p>Hello React</p>
      </div>
    );
  }
});

React.render(<Intro />, document.getElementById('intro'));