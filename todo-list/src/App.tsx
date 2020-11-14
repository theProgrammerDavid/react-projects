import React, { ChangeEvent, MouseEvent } from 'react';
import Todos from './todos';
import './App.css';
import Navbar from './NavBar';

class App extends React.Component {

  state = {
    currentIndex: 2,
    newTodoValue: '',
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play games" }
    ]
  };

  deleteTodo = (id: number) => {
    console.log('delete todo ');
  }

  onTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodoValue: event.target.value
    })
  }

  addNewTodo = () => {
    this.state.currentIndex++;
    this.state.todos.push({
      id: this.state.currentIndex, content: this.state.newTodoValue
    });
    // this.forceUpdate();
    this.setState(this.state)

  }

  render() {
    return (
      <>
        <Navbar></Navbar>

        <input type="text" placeholder="new todo" value={this.state.newTodoValue} onChange={this.onTodoChange}></input>
        <button onClick={this.addNewTodo}>Add</button>
        <Todos todos={this.state.todos} cb={this.deleteTodo}></Todos>
      </>
    )
  }
}

export default App;
