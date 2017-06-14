var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require ('node-uuid');

var TodoApp = React.createClass({
  getInitialState : function (){
    return {
        //Setting the default values
      showCompleted: false,
        searchText:'',

      // pass this todo array into Todo-list components
      todos: [
        {
          id: uuid(),
          text : 'Walk The dog',
            completed: false
        },
          {
          id:uuid(),
          text: 'Take Medicine',
              completed: false
        },
          {
            id:uuid(),
              text: 'Bring Pencil',
              completed: true
          },
          {
            id:uuid(),
              text: 'Buy Vegies',
              completed: true
          }
      ]
    }
  },

    handleToggle : function(id){
     var updatedTodos = this.state.todos.map((todo)=>{
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
         return todo;

     });

     this.setState({
         todos: updatedTodos
     })
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
                  text: text,
                    completed: false
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={handle}/>
      </div>
    )
  }
});

module.exports = TodoApp;
