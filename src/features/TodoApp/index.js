import React, { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      // "normal","editable","new"
      status: "normal",
      isShowEdit: false,
      isCompleted: false,
      content: "Hello GiveCampus",
      due: new Date(),
    },
    {
      id: uuid(),
      status: "normal",
      isShowEdit: false,
      isCompleted: true,
      content: "Build a todo list app",
      due: new Date(2020, 10, 20),
    },
    {
      id: uuid(),
      status: "normal",
      isShowEdit: false,
      isCompleted: true,
      content: "Build a todo list app v2",
      due: new Date(2020, 10, 31),
    },
  ]);

  const childProps = {
    todos,
    setTodos,
  };

  return (
    <div className="todo-main">
      <Header />
      <AddTodo {...childProps} />
      <TodoList {...childProps} />
    </div>
  );
}

export default TodoApp;
