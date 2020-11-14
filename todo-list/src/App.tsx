import React, { ChangeEvent } from 'react';
import Todos from './todos';
import './App.css';
import Navbar from './NavBar';
import { Container, TextField, Button } from '@material-ui/core'

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
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({ todos: todos });
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
    // const newArray = this.state.todos.push({id: this.state.currentIndex, content: this.state.newTodoValue})
    // this.setState({
    //   todos: newArray
    // })
    this.forceUpdate();
    // this.setState(this.state)

  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <br />
        <Container>
          <TextField id="filled-basic" label="Add New Todo" variant="filled" value={this.state.newTodoValue} onChange={this.onTodoChange} />
          <Button variant="contained" color="primary" onClick={this.addNewTodo}>
            Primary
          </Button>
          {/* <input type="text" placeholder="new todo" value={this.state.newTodoValue} onChange={this.onTodoChange}></input> */}
          {/* <button onClick={this.addNewTodo}>Add</button> */}
          <Todos todos={this.state.todos} cb={this.deleteTodo}></Todos>
        </Container>
      </>
    )
  }
}

export default App;
