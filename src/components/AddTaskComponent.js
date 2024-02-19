import { useRef } from "react";
import styles from "./../input.css";

export default function AddTaskComponent(props) {
  const inputText = useRef(null);

  function addTask() {
    props.handleTaskAdd(inputText.current.value);
    inputText.current.value = "";
  }

  return (
    <div className="m-4 flex">
      <input
        className="block rounded-md border border-gray-200 mr-4"
        ref={inputText}
      />
      <button
        className="bg-black rounded-md text-white font-semibold text-xs px-4 py-2 mr-4"
        onClick={addTask}
      >
        Add
      </button>

      <button
        className="bg-transparent border rounded-md text-black  font-semibold text-xs px-4 py-2"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
}
