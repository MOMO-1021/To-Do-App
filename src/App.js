// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // State to hold the list of todos:
  const [toDos,setTodos] = useState([]);
  // State to hold the input value:
  const [inputValue,setInputValue] = useState('');
  // Function to handle input change:
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }
  // Function to add a new todo:
  const addTodo = ()=>{
    if(inputValue.trim() !== ''){
      setTodos([...toDos,{text: inputValue,completed: false}]);
      setInputValue('');
    }
  }
  // Function to toggle a toDo as Completed:
  const toggleTodo = (index)=>{
    const newTodos = [...toDos]; // create a shallow copy of toDos array to a 'newTodos'
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  // Function to delete a todo
  const deleteTodo = (index)=>{
    const newTodos = toDos.filter((_,i)=> i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>To-do-List</h1>
      <div>
        <input
          type = "text"
          placeholder = "Add a new Task"
          value = {inputValue}
          onChange = {handleInputChange}
          style = {{marginRight:'0.5rem',marginLeft:'0.5rem'}}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{listStyleType:'none'}}>
        {toDos.map((toDo,index)=>(
          <li key={index} style={{marginBottom:'0.7rem'}}>
            <span style={{
              textDecoration: toDo.completed? 'line-through' : 'none',
              marginRight: '2rem',
              cursor: 'pointer'
            }}
            onClick = {()=> toggleTodo(index)}
            >
            {toDo.text}
            </span> 
            <button onClick = {() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
