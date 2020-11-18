import React from 'react'
import Todo from './Todo' 
const TodoList  = ({todos,id,setTodos,filterTodos}) =>{
	//console.log(todos)

	return(
	<div className="todo-container">

      <ul className="todo-list">
      {
      	filterTodos.map( todo =>(
      			<Todo
      			setTodos={setTodos}
      			 todos={todos}
      			  key={todo.id}
      			  todo={todo}
      			  text={todo.text}
      			  id={todo.id}/>

      			)
     	 )
      }

</ul>
    </div>)
}


export default TodoList