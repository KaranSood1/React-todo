var $ = require('jquery');

module.exports = {
    
    //Setting Todos
    
    setTodos : function (todos) {
        if($.isArray(todos)){

            //
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;

        }

          },
    
    //To get todo
    
    getTodos:function () {

        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {

            todos = JSON.parse(stringTodos);

        }catch (e){

        }

        if($.isArray(todos)){
            return todos;
        }else{
            return [];
        }
    }
};