import {ADD_TASK, SAVE_TASK, EDIT_TASK, DONE_TASK, FILTER_TASK} from '../ActionsType';
import { v4 as uuidv4 } from 'uuid';

const tasks= [
{
    id:uuidv4(),
    description:"Reading a book",
    isDone: false,
},
{
    id:uuidv4(),
    description:"Coding",
    isDone: false,
},
{
    id:uuidv4(),
    description:"Eating food",
    isDone: false, 
}]

 

const TasksReducer = (state = {tasks, save: null, filter:"tasksAFiltree"},action) =>{
    switch(action.type){
        case(ADD_TASK): 
        return ( {...state, tasks : [...state.tasks , action.payload]} );

        case(SAVE_TASK): 
        return  ({...state, save : action.payload}) ;

        case(EDIT_TASK): 
        return ( 
            {save : null ,
             tasks: state.tasks.map
             (el=> (el.id === state.save.id) ? {...el, description : action.payload}: el)
            } 
        );

        case(DONE_TASK): 
        return ( 
            {...state,
             tasks: state.tasks.map
             (el=> (el.id === action.payload) ? {...el, isDone : !el.isDone}: el)
            } 
        );

        case(FILTER_TASK): 
        return ( 
            {...state,
             filter: action.payload
            } 
        );

        default : 
        return state;
    }
         
    
}
export default TasksReducer;