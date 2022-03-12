import { Box, Button, Tab } from "@mui/material";
import React from "react";
import Tabs from '@mui/material/Table';
import TabPanel from "@mui/material/Table"
import { useDispatch } from "react-redux";
import { filterTask } from "../Redux/Actions";
export  const  FilterTask = ()=>{
  const dispatch = useDispatch();
  const handleFilter=(event)=>{
      dispatch(filterTask(event.target.value))
  }
  
    return(
      <div>
        <form>
              <input type="radio" name="All_Tasks" value="All_Tasks" onChange={handleFilter}/>
<label>No Filter</label>
    <input type="radio" name="Done" value="Done" onChange={handleFilter}/>
<label>Done</label>
    <input type="radio" name="To_Do" value="To_Do" onChange={handleFilter}/>
<label>Not Done</label>
        </form>

      </div>
      
    )
}
