import React from "react";
import Card from "./Card";
import H3 from "./H3";
import Input from "./Input";
import Button from "./Button";

function ToDoForm(props) {
  const [inputValue, setInputValue] = React.useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const SaveToDo = () => {
    props.onCreate(inputValue);
    setInputValue("");

    props.onClose();
  };

  return (
    <div className="shadow p-4 mt-3 mb-3 rounded-md">
      <H3>Create a todo</H3>
      <div className="mt-4 mb-4 w-80">
        <Input
          value={inputValue}
          onChange={onInputChange}
          placeholder="Write A ToDo"
        />
      </div>
      <div className="space-x-4">
        <Button onClick={SaveToDo}>Save</Button>
        <Button onClick={props.onClose} theme="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default ToDoForm;
