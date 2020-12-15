import React from "react";

class TodoForm extends React.Component {
  todoRef = React.createRef();

  addItemOnList = e => {
    e.preventDefault();
    let hidden=document.getElementById("itemkey").value;
    const todoItem = {
      todo: this.todoRef.current.value,
      isCompleted: false
    };
    if(hidden=="undefined")
    {
      this.props.addToDoItems(todoItem);
    }
    else{
   this.props.updateTodos(hidden,todoItem);
    }
    document.getElementById("tbox").value="";
    document.getElementById("itemkey").value="undefined";
  };
//To insert new task
  render() {
    return (
      <form id="todoList-form">
        <input id="tbox" type="text" name="todosTxtbx" ref={this.todoRef} />
        <input type="hidden" id="itemkey" value="undefined"/>
        <button onClick={this.addItemOnList}>Add </button>
      </form>
    );
  }
}

export default TodoForm;
