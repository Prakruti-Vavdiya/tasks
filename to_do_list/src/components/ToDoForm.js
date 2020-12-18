import React from 'react'

const ToDoForm = (props) => {
     
     return (
        <div>
           <form id="form" onSubmit ={props.handleSubmit}>
            <input 
                type="text"
                id="input"
                placeholder="Enter a task...."
                value= {props.item}
                onChange = {props.handleChange }></input>
            <button className="submit" type="submit">
                {props.editItem ? "Confirm" : "Add"}</button>
          </form>
        </div>
     )
}

export default ToDoForm