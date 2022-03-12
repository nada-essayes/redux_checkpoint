import { Box, Checkbox  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { saveTask,doneTask } from "../Redux/Actions";


export  const  Task = ({task,setValue})=>{
    const save = useSelector((state)=>state.TasksReducer.save);
    const tasks = useSelector((state)=>state.TasksReducer.tasks);
    const dispatch = useDispatch(); 
  /*  const [checkTask,setCheckTask]=useState(false);
    const handleCheck = ()=> dispatch(saveTask (tasks.id))

   useEffect(()=>{
    setCheckTask(tasks.isDone)}
    ,[tasks]);  */
    useEffect(()=>{
        if (save) setValue(save.description);}
        ,[save]); 
    return(
    <div>
        <Box>
           
            {/* <Checkbox  checked={task.isDone} >
            </Checkbox> */}
            <button onClick={()=> dispatch(doneTask(task.id))}>{task.isDone ? "done":"not done"}</button>
          {task.description}
            <button onClick={()=>dispatch(saveTask(save))} >Edit</button> 
           
        </Box>
    </div>
    )

}