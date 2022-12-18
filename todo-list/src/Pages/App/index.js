import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

import AppHeader from "./AppHeader";
import AddTask from "./AddTask";

import "../../styles/appStyles.scss";

import Task from "./Task";

const inputRef = React.createRef();

const App = () => {
  const { user } = useAuthContext();
  const { documents: allTasks } = useCollection('tasks', ['uid', '==', user.uid]);
  const [isShowingNewTask, setShowingNewTask] = useState(false);


  return (
    <div className="app__container">
      <div className="app">
        <AppHeader />


        <div className="app__content">
          {
            allTasks ? allTasks.map((item, index) => (
              <Task key={index} id={item.id} text={item.text} isCompleted={item.isCompleted} />
            ))
              : null
          }
        </div>


        <div className={isShowingNewTask ? "app__add app__add--rotated" : "app__add"} onClick={() => {
          setShowingNewTask(prev => {
            if (prev === false) {
              inputRef.current.focus();
            }
            return !prev;
          });
        }}>
          <AiOutlinePlus />
        </div>
        <div className={isShowingNewTask ? "overlay__bg overlay__bg--show" : "overlay__bg"}>

        </div>
      </div>

      <div className={isShowingNewTask ? "overlay overlay--show" : "overlay"}>
        <div className="overlay__content">
          <AddTask ref={inputRef} setShowingNewTask={setShowingNewTask} />
        </div>
      </div>
    </div>
  )
}

export default App;
