import {
  CheckIcon,
  Cross2Icon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useRef, useState } from "react";

export default function TaskListComponent(props) {
  const [edit, setEdit] = useState(false);

  function handleOnSave(newLabel) {
    const newTask = { ...props.task, label: newLabel };
    setEdit(false);
    props.taskUpdated(newTask);
  }

  return (
    <div className="border my-2 py-3 mx-5 rounded-md px-4">
      {edit ? (
        <EditTaskComponent
          task={props.task}
          onSave={(label) => handleOnSave(label)}
          onCancel={() => setEdit(false)}
        />
      ) : (
        <CheckTaskComponent
          task={props.task}
          onClick={(task) => props.onClick(task)}
          onEdit={() => setEdit(true)}
          onDelete={(task) => props.onDelete(task)}
        />
      )}
    </div>
  );
}

function EditTaskComponent(props) {
  const editedTaskCheckRef = useRef(null);
  return (
    <div className="flex flex-row items-center">
      <input
        autoFocus
        className="grow focus:outline-none text-gray-500 italic"
        ref={editedTaskCheckRef}
        defaultValue={props.task.label}
      />

      <button
        className="text-white font-semibold text-xs px-2 mr-4"
        onClick={() => {
          props.onSave(editedTaskCheckRef.current.value);
        }}
      >
        <CheckIcon color="black" />
      </button>
      <button
        className="text-white font-semibold text-xs px-2 mr-4"
        onClick={() => props.onCancel(props.task)}
      >
        <Cross2Icon color="black" />
      </button>
    </div>
  );
}

function CheckTaskComponent(props) {
  const checkBoxValue = useRef(null);

  function handleOnClick() {
    props.task.value = checkBoxValue.current.checked;
    props.onClick(props.task);
  }

  return (
    <div className="flex flex-row items-center">
      <input
        className="mr-2 focus:to-black accent-black"
        type="checkbox"
        ref={checkBoxValue}
        onClick={() => handleOnClick()}
        checked={props.task.value}
        id={props.task.id}
        name={props.task.id}
        value={props.task.value}
      />
      <label
        className={`grow ${
          props.task.value ? "text-gray-500 italic line-through" : undefined
        }`}
        htmlFor={props.task.id}
      >
        {props.task.label}
      </label>
      <button
        className="text-white font-semibold text-xs px-2 mr-4"
        onClick={() => props.onEdit(props.task)}
      >
        <Pencil1Icon color="black" />
      </button>
      <button
        className="font-semibold text-xs px-2  mr-4"
        onClick={() => props.onDelete(props.task)}
      >
        <TrashIcon color="black" />
      </button>
    </div>
  );
}
