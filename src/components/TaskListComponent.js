import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

export default function TaskListComponent(props) {
  const [edit, setEdit] = useState(false);

  function handleOnSave(newLabel) {
    const newTask = { ...props.task, label: newLabel };
    setEdit(false);
    props.taskUpdated(newTask);
  }

  return (
    <div>
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
  console.log(props);
  return (
    <div>
      <input ref={editedTaskCheckRef} defaultValue={props.task.label} />
      <button
        onClick={() => {
          props.onSave(editedTaskCheckRef.current.value);
        }}
      >
        Save
      </button>
      <button onClick={() => props.onCancel(props.task)}>Cancel</button>
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
    <div>
      <input
        type="checkbox"
        ref={checkBoxValue}
        onClick={handleOnClick}
        checked={props.task.value}
        id={props.task.id}
        name={props.task.id}
        value={props.task.value}
      />
      <label htmlFor={props.task.id}>
        {props.task.label}
        {props.task.value ? "Done" : "Pending"}
      </label>
      <button
        className="bg-black rounded-md text-white font-semibold text-xs px-4 py-2 mr-4"
        onClick={() => props.onEdit(props.task)}
      >
        <Pencil1Icon />
      </button>
      <button onClick={() => props.onDelete(props.task)}>
        <TrashIcon />
      </button>
    </div>
  );
}
