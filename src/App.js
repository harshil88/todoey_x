import "./App.css";
import starterTasks from "./starterTasks";
import TaskListComponent from "./components/TaskListComponent";
import { useState } from "react";
import AddTaskComponent from "./components/AddTaskComponent";
import styles from "./input.css";

function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [filterId, setFilterId] = useState(0);
  function handleTaskChange(task) {
    const updatedTasks = tasks.map((curr) => {
      if (task.id === curr.id) {
        return { ...curr, value: task.value, label: task.label };
      }
      return curr;
    });
    setTasks(updatedTasks);
  }

  function filteredTasks(id) {
    if (id === 0) {
      return tasks;
    } else if (id === 1) {
      return tasks.filter((ele) => ele.value);
    } else {
      return tasks.filter((ele) => !ele.value);
    }
  }

  function addTask(label) {
    const updatedTasks = [
      ...tasks,
      {
        id: tasks.length,
        label: label,
        value: false,
      },
    ];
    setTasks(updatedTasks);
  }

  function handleDeleteTask(task) {
    const updatedTasks = tasks.filter((ele) => ele.id !== task.id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1
        class="text-center text-stone-800 text-3xl m-8
       font-bold"
      >
        TODOEY
      </h1>
      <AddTaskComponent handleTaskAdd={addTask} />
      <button onClick={() => setFilterId(0)}>ALL </button>
      <button onClick={() => setFilterId(1)}>Done </button>
      <button onClick={() => setFilterId(2)}>Pendind </button>

      {filteredTasks(filterId).map((task) => (
        <TaskListComponent
          taskUpdated={(task) => handleTaskChange(task)}
          onDelete={(task) => handleDeleteTask(task)}
          onEdit={(task) => {
            handleTaskChange(task);
          }}
          task={task}
          onClick={(value) => {
            handleTaskChange(value);
          }}
        />
      ))}
    </>
  );
}

export default App;
