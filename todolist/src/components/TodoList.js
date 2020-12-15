import React from "react";
class TodoList extends React.Component {
  toggleCheckbox = event => {
    const updateTodo = {
      ...this.props.todoItems,
      [event.currentTarget.name]: event.currentTarget.checked
    };
    this.props.updateTodos(this.props.index, updateTodo);
  };
  
  editTextbox= index =>{
    let todos=this.props.todoItems;
    let val=todos.todo;
    document.getElementById("tbox").value=val;
    document.getElementById("itemkey").value=index;
  }
  render() {
    return (
      <li className={this.props.todoItems.isCompleted ? "done" : null}>
          <input
            type="checkbox"
            name="isCompleted"
            checked={this.props.todoItems.isCompleted}
            onChange={this.toggleCheckbox}
            
          />
        <span name="todo">{this.props.todoItems.todo}</span>
        <button className="edit-btn" disabled={this.props.todoItems.isCompleted ? "done" : null} onClick={() => this.editTextbox(this.props.index)}> Edit </button>
        <button className="del-btn" disabled={this.props.todoItems.isCompleted ? "done" : null} onClick={() => this.props.removeToDoItem(this.props.index)}> delete </button>
      </li>
    );
  }
}

export default TodoList;
