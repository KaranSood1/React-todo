var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState : function (){
    return {
      showCompleted: false,
        searchText:'',

      // pass this todo array into Todo-list components
      todos: [
        {
          id:1,
          text : 'Walk The dog'
        },
          {
          id:2,
          text: 'Take Medicine'
        },
          {
            id:3,
              text: 'Bring Pencil'
          },
          {
            id:4,
              text: 'Buy Vegies'
          }
      ]
    }
  },
    handleSearch: function (showCompleted, searchtext){
      this.setState({
          showCompleted: showCompleted,
          searchText: searchtext.toLowerCase()
      });
    },
    handleAddTodo: function(text){
    alert ('new todo: ' + text);
    },


  render: function () {
    var {todos} = this.state;
    var handle = this.handleAddTodo;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={handle}/>
      </div>
    )
  }
});

module.exports = TodoApp;
