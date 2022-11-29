import React from "react";
import Header from "./Header";
import Container from "./Container";
import H1 from "./H1";
import H3 from "./H3";
import Button from "./Button";
import ToDoForm from "./ToDoForm";
import ToDoRow from "./ToDoRow";

let i = localStorage.getItem("id_index") || 0;

function TodoPage() {
  const [todoFormVisible, setTodoFormVisiblity] = React.useState(false);

  const savedTodoList = JSON.parse(localStorage.getItem("todolist")) || [];

  console.log("i", i);

  const [todoList, setTodoList] = React.useState(savedTodoList);

  const updateTodoList = (todoList) => {
    setTodoList(todoList);

    localStorage.setItem("todolist", JSON.stringify(todoList));
  };

  const completeTodoList = todoList.filter((t) => t.done);
  const incompleteTodoList = todoList.filter((t) => !t.done);

  const showTodoForm = () => setTodoFormVisiblity(true);

  const hideTodoForm = () => setTodoFormVisiblity(false);

  const addTodo = (todoTitle) => {
    localStorage.setItem("id_index", ++i);

    updateTodoList([...todoList, { id: i, title: todoTitle, done: false }]);
  };

  const markAsDone = (todo) => {
    todo.done = true;

    updateTodoList([...todoList]);
  };

  const markAsNotDone = (todo) => {
    todo.done = false;

    updateTodoList([...todoList]);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <H1>Things to get done</H1>
        <H3>Things to do</H3>

        {!incompleteTodoList.length && <div>No todos here!</div>}

        {incompleteTodoList.map((t) => (
          <ToDoRow todo={t} onStatusChange={markAsDone} key={t.id}></ToDoRow>
        ))}

        {!todoFormVisible && (
          <Button onClick={showTodoForm} theme="highlight" icon="+">
            Add a todo
          </Button>
        )}

        {todoFormVisible && (
          <ToDoForm onClose={hideTodoForm} onCreate={addTodo} />
        )}
        <H3>Things done</H3>
        {!completeTodoList.length && <div>No todos here!</div>}

        {completeTodoList.map((t) => (
          <ToDoRow todo={t} onStatusChange={markAsNotDone} key={t.id}></ToDoRow>
        ))}
      </Container>
    </>
  );
}

export default TodoPage;
