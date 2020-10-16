import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import uuid from "react-uuid";
import Todo from "./Todo";

function AddTodo(props) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  let todo = {
    id: uuid(),
    status: "new",
    isShowEdit: false,
    isCompleted: false,
    content: "",
    due: new Date(),
  };

  return (
    <div className="todo-add">
      <button type="button" className="btn btn-primary" onClick={toggleShow}>
        {show ? <BiMinus /> : <BiPlus />} Add Task
      </button>
      {show ? (
        <div className="todo-container">
          <div className="todo-list">
            <Todo key={todo.id} todo={todo} {...props} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddTodo;
