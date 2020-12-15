import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    todoItems: {}
  };
  //add item in list
  addToDoItems = item => {
    const items = { ...this.state.todoItems };
    
    items[`item${Date.now()}`] = item;
    this.setState({
      todoItems: items
    });
    console.log(items);
  };
//remove item from list
  removeToDoItem = item => {
    const todos = { ...this.state.todoItems };
    delete todos[item];
    this.setState({ todoItems: todos });
  };
  //update item
  updateTodos = (key, updatedTodo) => {
    const todos = { ...this.state.todoItems };
    todos[key] = updatedTodo;
    this.setState({ todoItems: todos });
  };
  

  render() {
    return (
      <div className="App">
      
        <TodoForm addToDoItems={this.addToDoItems} updateTodos={this.updateTodos} />
        <ul>
          {Object.keys(this.state.todoItems).map(key => (
            <TodoList
              key={key}
              index={key}
              todoItems={this.state.todoItems[key]}
              removeToDoItem={this.removeToDoItem}
              updateTodos={this.updateTodos}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
