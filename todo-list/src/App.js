import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai"

import "./styles.scss";

import Task from "./task";

const App = () => {

  const [newTask, setNewTask] = useState('');
  const [reRenderExtra, setReRenderExtra] = useState(false);
  const [isShowingNewTask, setShowingNewTask] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  const toggleTaskCompletion = (id) => {
    const arr = allTasks;
    arr[id].isCompleted = !arr[id].isCompleted;
    setAllTasks(arr);
    setReRenderExtra(prev => !prev);
  }

  const editTaskGlobal = (id, text) => {
    const arr = allTasks;
    arr[id] = {
      text: text,
      isCompleted: arr[id].isCompleted
    };
    setAllTasks(arr);
    setReRenderExtra(prev => !prev);
  }

  const deleteTask = (id) => {
    setAllTasks(prev => {
      prev.splice(id, 1);
      return prev;
    });
    setReRenderExtra(prev => !prev);
  }

  const addTask = (e) => {
    e.preventDefault();
    setAllTasks(prev => [...prev, { text: newTask, isCompleted: false }])
    inputRef.current.value = "";
    setShowingNewTask(false);
  }

  const inputRef = useRef();

  const today = new Date();
  const todayDay = String(today.getDate()).padStart(2, '0');
  const todayMonth = String(today.toLocaleString('en-US', {
    month: 'short',
  }));
  const todayYear = today.getFullYear();
  const todayDayEng = String(today.toLocaleString('en-US', {
    weekday: 'long'
  }));

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('allTasks'));
    if (items) {
      setAllTasks(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <div className="app__container">
      <div className="app">
        <div className="app__header">
          <div className="app__header--left">
            <div className="app__header--left-day">{todayDay}</div>
            <div>
              <div className="app__header--left-month">{todayMonth}</div>
              <div className="app__header--left-year">{todayYear}</div>
            </div>
          </div>
          <div className="app__header--right">
            <span className="app__header--right-day">{todayDayEng}</span>
          </div>
        </div>
        <div className="app__content">
          {
            allTasks ? allTasks.map((item, index) => (
              <Task key={index} id={index} text={item.text} isCompleted={item.isCompleted} toggleTaskCompletion={toggleTaskCompletion} editTaskGlobal={editTaskGlobal}
                deleteTask={deleteTask} />
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
          {/* <h1 className="overlay__heading">Add Task</h1> */}
          <form onSubmit={(e) => addTask(e)}>
            <input className="overlay__input" type="text" placeholder="New Task" ref={inputRef} onChange={(e) => setNewTask(e.target.value)} />
            <input className="overlay__submit" type="submit" value="ADD" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
