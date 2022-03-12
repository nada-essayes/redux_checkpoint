import './App.css';
import { Container } from '@mui/material';
import { AddTask } from './Components/AddTask';
import { TaskList } from './Components/TaskList';
import { FilterTask } from './Components/FilterTask';

function App() {
  return (
    <Container>
     <h1> To Do List </h1>
     
        <AddTask />
        <TaskList/>
        <FilterTask/>
    </Container>
     
  );
}

export default App;
