import './App.css';
import starterTasks from './starterTasks';
import TaskListComponent from './components/TaskListComponent';
import { useState } from 'react';
import AddTaskComponent from './components/AddTaskComponent';


function App() {
  const [tasks, setTasks] = useState(starterTasks);



  function handleTaskChange(task){
    const updatedTasks = tasks.map((curr) => { if(task.id === curr.id ){
      return {...curr , value : task.value , label : task.label};
    }return curr;
  }
  );
  setTasks(updatedTasks);
  }


  function addTask(label){
    const updatedTasks = [...tasks , 
      {
        'id' : tasks.length,
        'label' : label,
        'value' : false
      },
    ];
    setTasks(updatedTasks);
  }

  function handleDeleteTask(task){
    const updatedTasks = tasks.filter(ele => ele.id !== task.id);
    setTasks(updatedTasks);
  }





  return (
    <>
    <h1>TODOEY</h1>
    <AddTaskComponent handleTaskAdd = {addTask}/>
    {
    tasks.map(task => <TaskListComponent 
      onDelete = {(task) => handleDeleteTask(task)}
      onEdit = {(task) => {handleTaskChange(task)}}
      task = {task} 
      onClick = {(value) => {
      handleTaskChange(value);
    }}/>)
    }
    </>
  );
}

export default App;
