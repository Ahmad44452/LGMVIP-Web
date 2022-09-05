import React from "react";
import StudentCard from "./studentCard";

const AllStudents = ({ students }) => {

  console.log(students);

  return (
    <div className="students">
      <h2 className="students__heading">Enrolled Students</h2>
      <div className="students__all">
        {
          students.map((item, index) => (<StudentCard key={index} values={item} />))
        }
        {/* <StudentCard />
        <StudentCard />
        <StudentCard /> */}
      </div>
    </div>
  )
}

export default AllStudents;