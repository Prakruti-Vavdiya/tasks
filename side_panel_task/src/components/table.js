import React from "react";
import './table.css'
const Table=(props)=>{
    let details=[...props.Details];
    let data=details.map((user,i)=>(
        <tr>
          <td style={{width:'40%'}}>{user.name}</td>
          <td style={{width:'20%'}}>{user.age}</td>
          <td style={{width:'40%'}}>
            <button onClick={() => {props.onSetSidebarOpen(true); props.onPressEditRecord(user,i)}} className='Submit'>
                Edit Record
            </button>
            <button onClick={() => {props.deleteRecord(i)}} className='Delete'>
                Delete Record
            </button>
          </td>
        </tr>
    ))
    return(
        <table className='DetailTable' key={new Date()}>
                        <tr>
                        <th>Name</th><th>Age</th><th>Actions</th>
                        </tr>
                        {data}
                        <tr>
                            <td colSpan='3'>
                                <button onClick={props.onAddMore} className='Add'>
                                    + Add Record
                                </button>
                            </td>
                        </tr>
        </table>
    );
}
export default Table;