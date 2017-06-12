var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState : function (){
    return {
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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
