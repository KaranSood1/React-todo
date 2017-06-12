var React = require('react');
var Todo =require('Todo');

var TodoList = React.createClass({
  render : function(){
    var {todos} = this.props;

    //render function for creating new todo for every item inan array
    var renderTodos = () => {
        return todos.map((todo)=>{
          return(
              <Todo key={todo.id} {...todo}/>
          )
        })

    };
      return(
        <div>
            {renderTodos()}
        </div>
      )
  }
});

module.exports = TodoList;
