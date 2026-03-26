import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

//Object array for input into component
const todos = [
  {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'User One'},
  {rowNumber:2, rowDescription:'Water Plants', rowAssigned:'User Two'},
  {rowNumber:3, rowDescription:'Make dinner', rowAssigned:'User Three'},
  {rowNumber:4, rowDescription:'Make some money', rowAssigned:'User Four'},
  {rowNumber:5, rowDescription:'Take a sleep', rowAssigned:'User Five'}
];

const addTodo = () => {
  if(todos.length>0){
    const newTodo = {
      rowNumber: todos.length +1,
      rowDescription: 'New Todo',
      rowAssigned: 'User Three'
    }
    todos.push(newTodo)
  }
  
  console.log(todos)
}

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
        </div>
      </div>
    </div>
  )
}

export default App;
