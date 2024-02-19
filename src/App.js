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

  const selectedButtonStyle =
    "bg-white rounded-md font-semibold text-xs text-black";

  return (
    <>
      <h1
        class="text-center text-stone-800 text-3xl m-8
       font-bold"
      >
        TODOEY
      </h1>
      <AddTaskComponent handleTaskAdd={addTask} />
      <div className="mx-5 bg-gray-100 w-fit rounded-md p-2 font-semibold text-xs text-gray-500">
        <button
          className={`px-2 py-1 mx-2 ${
            filterId === 0 ? selectedButtonStyle : undefined
          }`}
          onClick={() => setFilterId(0)}
        >
          All
        </button>
        <button
          className={`px-2 py-1 mx-2 ${
            filterId === 1 ? selectedButtonStyle : undefined
          }`}
          onClick={() => setFilterId(1)}
        >
          Completed
        </button>
        <button
          className={`px-2 py-1 mx-2 ${
            filterId === 2 ? selectedButtonStyle : undefined
          }`}
          onClick={() => setFilterId(2)}
        >
          Pending
        </button>
      </div>
      <div>
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
      </div>
    </>
  );
}

export default App;
