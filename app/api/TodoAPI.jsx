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
    },

    filterTodos : function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
        //Filter by Show Completed
        filteredTodos = filteredTodos.filter((todos) => {
            return !todos.completed || showCompleted;
        });

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;


        });


        //Sort todos with non-completed first
        filteredTodos.sort((a,b)=>{
           if(a.completed === false && b.completed=== true){
               return -1;
           }else if (a.completed === true && b.completed === false){
               return 1;
           }else{
               return 0;
           }
        });

        return filteredTodos;

    }

};