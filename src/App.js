import React, {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList'
function App() {
  
const [inputText,setInputText]=useState("");
const [todos,setTodos]=useState([]);
const [status,setStatus]=useState('all');
const [filterTodos, setFilterTodos] =useState([])


useEffect(() =>{
getLocalTodos()
},[])

useEffect(() =>{
filterHandler()
saveLocalTodos()
},[todos,status])
const filterHandler = () => {
 switch(status){
 	case 'completed':
 		setFilterTodos(todos.filter((todo) => todo.completed===true))
 		break;
 	case 'uncompleted':
 		setFilterTodos(todos.filter((todo) => todo.completed===false))
 		break;
 	default:
 		setFilterTodos(todos)
 		break;
 
 }
}

//saving to localstorage

const saveLocalTodos = () =>{
		localStorage.setItem('todos',JSON.stringify(todos))
	
}
const getLocalTodos = () =>{
	if(localStorage.getItem('todos')===null ){
		localStorage.setItem('todos',JSON.stringify([]))
	}
	else{
		let localtodo=JSON.parse(localStorage.getItem("todos"))
		setTodos(localtodo)
	}
}
  return (
    <div className="App">
      
	<header>
	kapil's ToDo List
	</header>         
	<Form todos={todos} setTodos={setTodos}
	 inputText={inputText} 
	 setInputText={setInputText}

	 setStatus={setStatus}/>
	<TodoList 
		 filterTodos={filterTodos}
		 setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;

