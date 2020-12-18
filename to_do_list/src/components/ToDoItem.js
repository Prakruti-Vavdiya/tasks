import React from 'react'

const ToDoItem = (props) => {
    return (
      <li className="List">
           <input type="checkbox" className="Checkbox" onClick = {props.handleChecked}></input>
           <span>
            <span className={props.checked ? "checked":"unchecked"}>{props.title}</span>
                   <button className="Edit" onClick={props.handleEdit} disabled={props.checked} >Edit</button>
                  <button className="Delete" onClick ={props.handleDelete} disabled={props.checked} >Delete</button>       
            </span>
      </li>
    ) 
}

export default ToDoItem