import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import Heading from './Heading'
import './App.css'
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todo-apps';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) }, [todos]);


  function toggleTodo(id) {
    const newTodos = [...todos];
    //console.log(id)
    const todo = newTodos.find(todo => todo.id === id);
    //console.log(todo);
    todo.complete = !todo.complete;
    setTodos(newTodos);

  }

  function handleTodo(e) {
    const name = todoNameRef.current.value;

    if (name === '') return
    //console.log(name);

    todoNameRef.current.value = null;

    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuid(), name: name, complete: false
      }];
    })

  }

  function handleRemoveTodo() {
    const newTodos = todos.filter(tod => !tod.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div class="center">
        <Heading class='heading'></Heading>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} input="text" />
        <button onClick={handleTodo}>Add Todo</button>
        <button onClick={handleRemoveTodo}>Clear Completed</button>

        <span class="spacer white-text">

          <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </span>


      </div>
    </>
  );
}

export default App;
