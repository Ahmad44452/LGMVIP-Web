import React, { useState } from 'react';

import UserForm from './Form';
import AllStudents from './AllStudents';

import "./styles.scss";

const App = () => {

  const [students, setStudents] = useState([]);

  return (
    <div className='mainContainer'>
      <nav>Student Enrollment Form</nav>
      <div className='container'>
        <UserForm setStudents={setStudents} />
        <AllStudents students={students} />
      </div>
    </div>
  );
}

export default App;
