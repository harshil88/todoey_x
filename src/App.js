import './App.css';
import starterTasks from './starterTasks';
import TaskListComponent from './components/TaskListComponent';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState(starterTasks);
  function handleTaskChange(task){
    console.log(starterTasks);
    const updatedTasks = tasks.map((curr) => { if(task.id === curr.id ){
      return {...curr , value : task.value};
    }return curr;}
  );

  setTasks(updatedTasks );
   
  }

  return (
    <>
    <h1>TODOEY</h1>
    {
    tasks.map(task => <TaskListComponent task = {task} onClick = {(value) => {
    
      handleTaskChange(value);
    }}/>)
    }
    </>
  );
}

export default App;
