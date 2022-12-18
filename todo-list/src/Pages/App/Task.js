import React, { useState, useContext } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { GrCheckmark } from "react-icons/gr";

import LoadingContext from "../../Contexts/LoadingContext";
//firebase configs
import { db } from "../../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";

const Task = ({ id, text, isCompleted }) => {

  const [isEditingTask, setEditingTask] = useState(false);
  const [taskText, setTaskText] = useState(text);
  const setIsLoading = useContext(LoadingContext);

  const toggleTaskCompletion = async (id) => {
    setIsLoading(true);
    await setDoc(doc(db, 'tasks', id), { isCompleted: !isCompleted }, { merge: true })
    setIsLoading(false);
  }

  const editTask = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setEditingTask(false);

    if (taskText === "")
      setTaskText('Empty')

    await setDoc(doc(db, 'tasks', id), { text: taskText }, { merge: true })

    setIsLoading(false);

  }

  const deleteTask = async (id) => {
    setIsLoading(true);
    const docRef = doc(db, 'tasks', id);
    await deleteDoc(docRef);
    setIsLoading(false);
  }


  return (
    <div className="task">
      <div className="task__left">
        <div className={isCompleted ? "task__checkbox task__checkbox--checked" : "task__checkbox"} onClick={() => toggleTaskCompletion(id)}>
          <GrCheckmark />
        </div>
        <div className={isCompleted ? "task__text task__text--completed" : "task__text"}>
          {
            isEditingTask ?
              <form onSubmit={(e) => editTask(e)}>
                <input defaultValue={text} onChange={(e) => setTaskText(e.target.value)} onBlur={(e) => e.target.focus()} autoFocus />
              </form> : text
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