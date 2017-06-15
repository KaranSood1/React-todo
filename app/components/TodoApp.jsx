var React = require('react');
var uuid = require ('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState : function (){
    return {
        //Setting the default values
      showCompleted: false,
        searchText:'',

      // pass this todo array into Todo-list components

        todos  : TodoAPI.getTodos()

      // todos: [
      //   {
      //     id: uuid(),
      //     text : 'Walk The dog',
      //       completed: false
      //   },
      //     {
      //     id:uuid(),
      //     text: 'Take Medicine',
      //         completed: false
      //   },
      //     {
      //       id:uuid(),
      //         text: 'Bring Pencil',
      //         completed: true
      //     },
      //     {
      //       id:uuid(),
      //         text: 'Buy Vegies',
      //         completed: true
      //     }
      // ]
    }
  },

    componentDidUpdate :function () {
        TodoAPI.setTodos(this.state.todos);
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

    var {showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={handle}/>
      </div>
    )
  }
});

module.exports = TodoApp;
