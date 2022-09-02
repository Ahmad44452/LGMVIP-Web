import React, { useState } from "react";

import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { GrCheckmark } from "react-icons/gr";

const Task = ({ id, text, isCompleted, toggleTaskCompletion, editTaskGlobal, deleteTask }) => {

  const [isEditingTask, setEditingTask] = useState(false);
  const [taskText, setTaskText] = useState(text)

  const editTask = (e) => {
    e.preventDefault();
    if (taskText === "")
      setTaskText('Empty')

    editTaskGlobal(id, taskText);
    setEditingTask(false);
  }


  return (
    <div className="task">
      <div className="task__left">
        <div className={isCompleted ? "task__checkbox task__checkbox--checked" : "task__checkbox"} onClick={() => toggleTaskCompletion(id)}>
          <GrCheckmark />
        </div>
        <div className={isCompleted ? "task__text task__text--completed" : "task__text"}>
          {
            isEditingTask ? <form onSubmit={(e) => editTask(e)}><input defaultValue={text} onChange={(e) => setTaskText(e.target.value)}
              onBlur={(e) => e.target.focus()} autoFocus /></form> : text
          }
        </div>
      </div>
      <div className="task__right">
        <div className={isCompleted ? "task__edit task__edit--disabled" : "task__edit"} onClick={() => setEditingTask(true)}>
          <BsFillPencilFill />
        </div>
        <div className="task__delete" onClick={() => deleteTask(id)}>
          <MdOutlineClose />
        </div>
      </div>
    </div>
  )
}

export default Task;