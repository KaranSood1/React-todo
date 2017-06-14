var React = require('react');

var Todo = React.createClass({
  render : function(){
    var {text} = this.props;
    var {id} = this.props;
    var {completed} = this.props;
    return(
      <div onClick={()=>{
        this.props.onToggle(id);

      }}>
          {/*{id}. {text}*/}
          <input type="checkbox" checked={completed} />
          {text}
      </div>

    )
  }
});

module.exports = Todo;
