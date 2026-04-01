import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  //Object array for input into component
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User Three' },
    { rowNumber: 4, rowDescription: 'Make some money', rowAssigned: 'User Four' },
    { rowNumber: 5, rowDescription: 'Take a sleep', rowAssigned: 'User Five' }
  ]);

  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
      console.log(todos)
    }


  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App;
