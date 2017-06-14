var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require ('node-uuid');

var TodoApp = React.createClass({
  getInitialState : function (){
    return {
      showCompleted: false,
        searchText:'',

      // pass this todo array into Todo-list components
      todos: [
        {
          id: uuid(),
          text : 'Walk The dog'
        },
          {
          id:uuid(),
          text: 'Take Medicine'
        },
          {
            id:uuid(),
              text: 'Bring Pencil'
          },
          {
            id:uuid(),
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
    //alert ('new todo: ' + text);

        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                  text: text
                }
            ]
        });

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
