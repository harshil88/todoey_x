import { useRef } from "react";

export default function TaskListComponent(props){

    const checkBoxValue = useRef(null);

    function handleOnClick(){
        console.log(checkBoxValue);
        props.task.value = checkBoxValue.current.checked;
        props.onClick(props.task);
    }

    return (<div>
        <input type="checkbox" ref={checkBoxValue} onClick={handleOnClick} id={props.task.id} name={props.task.id} value={props.task.value}/>
         <label htmlFor={props.task.id}>{props.task.label}{props.task.value ? "Done" : "Pending"}</label>   
    </div>);
}