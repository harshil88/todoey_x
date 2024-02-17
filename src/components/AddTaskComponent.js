import { useRef } from "react";

export default function AddTaskComponent(props){

    const inputText = useRef(null);

    function addTask(){
        props.handleTaskAdd(inputText.current.value);
        inputText.current.value = "";
    }


    return (
        <div>
            <input ref={inputText}/>
            <button onClick={addTask}>
                Add
            </button>
        </div>
    );
}