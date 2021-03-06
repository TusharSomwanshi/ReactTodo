var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';


var TodoList = React.createClass({
    render: function(){
      var {todos, showCompleted, searchText} = this.props;
      var renderTodos = ()=>{
        if(todos.length === 0){
          return(
            <p className="container_message">Nothing to do</p>
          )
        }
        return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) =>{
          return(
            <Todo key={todo.id} {...todo}/>
          );
        });
      };
      return(
        <div>
          {renderTodos()}
        </div>
      )
    }
});

module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
