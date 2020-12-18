import React from 'react'
import ToDoItem from './ToDoItem'


const ToDoList = (props) => {

    const items = props.items; 
    const checked =props.checked; 
    return (
       <ul>
           {
            items.map(item => {
                return( 
                    <ToDoItem 
                        key={item.id}
                        title={item.title}
                        checked={checked[items.indexOf(item)]}
                        handleDelete={() => props.handleDelete(item.id)}
                        handleEdit={() => props.handleEdit(item.id)}
                        handleChecked={() => props.handleChecked(item.id)}
                    />
                )

            })
           }


         
            <button
                type="button" 
                className="Clear"
                onClick ={props.clearList}>Clear List</button>
       </ul>
       
    )
}

export default ToDoList