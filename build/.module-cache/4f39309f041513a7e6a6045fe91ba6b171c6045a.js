var Intro = React.createClass({displayName: 'Intro',
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "React intro")
      )
    );
  }
});

React.render(React.createElement(Intro, null), document.getElementById('app'));