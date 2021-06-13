import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Actions/ListTasks";
import Edit from "../Edit/Edit";
import "./Task.css";
import { Button } from "react-bootstrap";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-card">
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task} />
        <Button
          variant="outline-primary"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => dispatch(doneTask(task.id))}
        >
          {task.isDone ? "undone" : "done"}
        </Button>
      </div>
    </div>
  );
};

export default Task;