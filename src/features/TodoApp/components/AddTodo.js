import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { DateChooser } from "./DateChooser";
import uuid from "react-uuid";

function AddTodo(props) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const [addContentInput, setAddContentInput] = useState("");
  const [addDueInput, setAddDueInput] = useState(new Date());

  const addHandler = (event) => {
    event.preventDefault(); // Prevent REFRESH

    let newTodo = {
      id: uuid(),
      status: "normal",
      isShowEdit: false,
      isCompleted: false,
      content: addContentInput,
      due: addDueInput,
    };
    props.setTodos([newTodo, ...props.todos]);

    setAddContentInput("");
    props.setAddDueInput(new Date());
  };

  return (
    <div className="todo-add">
      <button type="button" className="btn btn-primary mb-2" onClick={toggleShow}>
        {show ? <BiMinus /> : <BiPlus />} Add Task
      </button>

      {show ? (
        <div className="todo-task">
          <div className="todo-item">
            <div className="left-side">
              <input
                className="form-control"
                type="text"
                placeholder="Take note here"
                value={addContentInput}
                onChange={(event) => setAddContentInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    addHandler(event);
                  }
                }}
              ></input>
            </div>
            <div className="right-side">
              <>
                <DateChooser dueInput={addDueInput} setDueInput={setAddDueInput} />
                <div className="btn btn-primary btn-icon" role="button" onClick={addHandler}>
                  <span>Add</span>
                </div>
              </>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddTodo;
