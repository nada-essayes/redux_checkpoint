import React from "react";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { Task } from "./Task";
export  const  TaskList = ()=>{
    const tasks = useSelector((state)=>state.TasksReducer.tasks);/*sélectionner le state from reducer*/
    const filter = useSelector((state)=>state.TasksReducer.filter);
    const filterTsk=(tasks,filter)=>{
        switch (filter) {
            case "Done":
                return (tasks.filter((el) => el.isDone === true));

            case "To_Do":
                return (tasks.filter((el) => el.isDone === false));
            
            case "All_Tasks":
            default:
                return tasks;
               
        }
    }
    const tasksFiltres = filterTsk (tasks,filter);
    console.log("#",tasks)
        return(
        <Box>
        {  
            tasks.map((task) =>{
                return <Task task={task} key={task.id}  />
            })
      
        }
        </Box>
        
    )

    }