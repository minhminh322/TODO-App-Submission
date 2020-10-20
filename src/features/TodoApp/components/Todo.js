import React, { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import trash2 from "react-useanimations/lib/trash2";
import edit from "react-useanimations/lib/edit";
import { DateChooser } from "./DateChooser";
import { dueCalculator } from "../utils";

const Todo = (props) => {
  const [contentInput, setContentInput] = useState("");
  const [dueInput, setDueInput] = useState(new Date());

  const saveHandler = (event) => {
    event.preventDefault(); // Prevent REFRESH

    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          item.status = "normal";
          item.content = contentInput;
          item.due = dueInput;
        }
        return item;
      })
    );
  };

  const deleteHandler = (event) => {
    event.preventDefault(); // Prevent REFRESH
    props.setTodos(props.todos.filter((item) => item.id !== props.todo.id));
  };

  const toggleCompleted = (event) => {
    event.preventDefault(); // Prevent REFRESH
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          item.isCompleted = !props.todo.isCompleted;
        }
        return item;
      })
    );
  };

  const handleShowEdit = (action) => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          item.isShowEdit = action ? true : false;
        }
        return item;
      })
    );
  };

  // Action when edit a task
  const toggleEditable = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          if (props.todo.status !== "editable") {
            item.status = "editable";
          } else {
            item.status = "normal";
          }

          setContentInput(props.todo.content);
        }
        return item;
      })
    );
  };

  const renderLeftView = () => {
    switch (props.todo.status) {
      case "normal":
        return (
          <>
            <div className="btn-icon" role="button">
              <UseAnimations
                animation={radioButton}
                size={40}
                strokeColor={"green"}
                // wrapperStyle={{ background: "red" }}
                reverse={props.todo.isCompleted}
                onClick={toggleCompleted}
              />
            </div>

            <li className={`todo-content ${props.todo.isCompleted ? "completed" : ""}`}>{props.todo.content}</li>
          </>
        );
      case "editable":
        return (
          <>
            <div className="btn-icon" role="button">
              <UseAnimations
                animation={radioButton}
                size={40}
                strokeColor={"green"}
                // wrapperStyle={{ background: "red" }}
                reverse={props.todo.isCompleted}
                onClick={toggleCompleted}
              />
            </div>

            <input
              className="form-control"
              type="text"
              placeholder="Take note here"
              value={contentInput}
              onChange={(event) => setContentInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  saveHandler(event);
                }
              }}
            ></input>
          </>
        );
      default:
        return null;
    }
  };
  const renderRightView = () => {
    switch (props.todo.status) {
      case "normal":
        return (
          <>
            <div className="todo-due">
              <div style={{ fontSize: "large", padding: "0rem 0.5rem" }}>{dueCalculator(props.todo.due)}</div>
              <HiOutlineCalendar size={22} />
            </div>
            <div className="btn-icon" role="button">
              <UseAnimations
                animation={trash2}
                size={32}
                strokeColor={"red"}
                wrapperStyle={{ margin: "auto" }}
                onClick={deleteHandler}
              />
            </div>
          </>
        );
      case "editable":
        return (
          <>
            <DateChooser dueInput={dueInput} setDueInput={setDueInput} />
            <div className="btn btn-primary btn-icon" role="button" onClick={saveHandler}>
              <span>Save</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="todo-task"
      onMouseEnter={() => {
        if (props.todo.status !== "new") {
          handleShowEdit(true);
        }
      }}
      onMouseLeave={() => {
        if (props.todo.status !== "new") {
          handleShowEdit(false);
        }
      }}
    >
      <div className="todo-item">
        <div className="left-side">{renderLeftView()}</div>

        <div className="right-side">{renderRightView()}</div>
      </div>
      {props.todo.isShowEdit && (
        <div className="btn-icon" role="button">
          <UseAnimations
            animation={edit}
            size={40}
            strokeColor={"purple"}
            // wrapperStyle={{ background: "red" }}
            // reverse={props.todo.isCompleted}
            onClick={toggleEditable}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
