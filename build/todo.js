/** @jsx React.DOM */

var List = React.createClass({displayName: 'List',
  getInitialState: function() {
    return {
      items: []
    }
  },
  addItem: function(item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  },
  removeItem: function(index) {
    this.state.items.splice(index, 1);
    this.setState({
      items: this.state.items
    });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "To do list:"), 
        React.createElement(AddItem, {add: this.addItem}), 
        React.createElement(ShowList, {itemsList: this.state.items, del: this.removeItem})
      )
    );
  }
});

var AddItem = React.createClass({displayName: 'AddItem',
  getInitialState: function() {
    return {
      newItem: ''
    }
  },
  updateNewItem: function(e) {
    this.setState({
      newItem: e.target.value
    });
  },
  handleAddItem: function() {
    this.props.add(this.state.newItem);
    this.setState({
      newItem: ''
    });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: this.state.newItem, onChange: this.updateNewItem}), 
        React.createElement("button", {onClick: this.handleAddItem}, " add item ")
      )
    );
  }
});

var ShowList = React.createClass({displayName: 'ShowList',
  render: function() {
    var itemsList = this.props.itemsList.map(function(item, index) {
      return (
        React.createElement("li", null, " ", item, " ", React.createElement("button", {onClick: this.props.del.bind(null, index)}, " delete "))
      );
    }.bind(this));

    return (
      React.createElement("div", null, 
        React.createElement("ul", null, 
          itemsList
        )
      )
    );
  }
});


React.render(React.createElement(List, null), document.getElementById('todo'));