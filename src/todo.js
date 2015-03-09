/** @jsx React.DOM */

var List = React.createClass({
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
      <div>
        <h1>5. Todo:</h1>
        <h3>To do list:</h3>
        <AddItem add={this.addItem}/>
        <ShowList itemsList={this.state.items} del={this.removeItem} />
      </div>
    );
  }
});

var AddItem = React.createClass({
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
      <div>
        <input type="text" value={this.state.newItem} onChange={this.updateNewItem} />
        <button onClick={this.handleAddItem}> add item </button>
      </div>
    );
  }
});

var ShowList = React.createClass({
  render: function() {
    var itemsList = this.props.itemsList.map(function(item, index) {
      return (
        <li> {item} <button onClick={this.props.del.bind(null, index)}> delete </button></li>
      );
    }.bind(this));

    return (
      <div>
        <ul>
          {itemsList}
        </ul>
      </div>
    );
  }
});


React.render(<List />, document.getElementById('todo'));