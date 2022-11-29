import React from 'react'
import Checkbox from './Checkbox';

function ToDoRow(props){

const onCheckedChange = () => {
  props.onStatusChange(props.todo);
}
  
  return(
        <div className="flex items-center mb-2">
      <Checkbox checked={props.todo.done} onChange={onCheckedChange}/>
      <span className={"ml-3  font-medium text-gray-700 text-sm " + (props.todo.done && 'line-through')}>{props.todo.title}</span>
    </div>
  );
}

export default ToDoRow;