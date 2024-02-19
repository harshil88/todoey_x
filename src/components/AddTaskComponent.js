import { useEffect, useRef, useState } from "react";
import styles from "./../input.css";

export default function AddTaskComponent(props) {
  const inputText = useRef("");
  const [filled, setFilled] = useState(true);

  function handleTextChange() {
    if (inputText.current.value == "") {
      setFilled(false);
    } else if (!filled) {
      setFilled(true);
    }
  }

  useEffect(() => {
    inputText.current.addEventListener("ke", handleTextChange());
    return inputText.current.removeEventListener("ke", handleTextChange());
  }, []);

  function addTask() {
    props.handleTaskAdd(inputText.current.value);
    if (inputText.current.value === "") {
    }
    inputText.current.value = "";
  }

  return (
    <div className="m-4 flex text-xs">
      <input
        onChange={() => handleTextChange()}
        defaultValue={"Do Something..."}
        className="block rounded-md border px-2 focus:border-black  border-gray-200 mr-4 italic outline-none"
        ref={inputText}
      />
      {filled ? (
        <button
          className="bg-black rounded-md text-white font-semibold text-xs px-4 py-2 mr-4"
          onClick={addTask}
        >
          Add
        </button>
      ) : (
        <button className="bg-transparent border rounded-md text-black  font-semibold text-xs px-4 py-2">
          Add
        </button>
      )}
    </div>
  );
}
