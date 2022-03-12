import {FormControl } from "@mui/material";
import React,{useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask} from "../Redux/Actions";
import { v4 as uuidv4 } from 'uuid';
export  const  AddTask = ({save})=>{
    
    const dispatch = useDispatch();
    const[value,setValue]=useState('');

    const handleClick =()=>{
        /*event.preventDefault();*/
        dispatch(addTask({
            id:uuidv4(),
            description: value,
            isDone:false, 
        }
        ));
        setValue('')
    };

    const handleAdd = (event) =>{
        setValue(event.target.value)
    };
    
    return(
    <div>
       
        <input
            type="text"
            value={value}
            placeholder="Add a new task"
            onChange={handleAdd}
        />
                
        <button 
            className="btn-btn-primary"
            color="green"
            disabled={!value}
            onClick={()=>{
                if(save) dispatch(editTask(value))
                else handleClick(); 
            }
                
            }
        > 
        {save ? "Edit the Task" : "Add a Task"} 
        </button>
        
   </div>
    )

}