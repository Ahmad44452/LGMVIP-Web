import React, { useContext } from "react";
import LoadingContext from "../../Contexts/LoadingContext";

//firebase imports
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { useAuthContext } from "../../hooks/useAuthContext";


const AddTask = React.forwardRef(({ setShowingNewTask }, inputRef) => {

  const setIsLoading = useContext(LoadingContext);
  const { user } = useAuthContext();

  const handleAddTask = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const date = new Date();
    setShowingNewTask(false);
    await addDoc(collection(db, 'tasks'), {
      uid: user.uid,
      text: inputRef.current.value,
      isCompleted: false,
      createdAt: JSON.stringify(date)
    })
    inputRef.current.value = "";
    setIsLoading(false);
  }

  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <input className="overlay__input" type="text" placeholder="New Task" ref={inputRef} />
      <input className="overlay__submit" type="submit" value="ADD" />
    </form>
  )
});

export default AddTask;