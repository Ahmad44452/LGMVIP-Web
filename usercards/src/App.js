import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import "./styles.scss";

import UserCard from "./UserCard";

const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUsers = async (pg) => {
    setLoading(true);
    const res = await axios.get(`https://reqres.in/api/users?page=${pg}`)
    setUsers(res.data.data);
    setLoading(false);
  }



  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar__logo">LGM</div>
        <div className="navbar__button" onClick={() => getUsers(1)} >Get Users</div>
      </nav>

      <div className={isLoading || users.length === 0 ? "userCard--container" : "userCard--container--grid"}>
        {
          isLoading === false && users.length === 0 ? <h2>No users available</h2> :
            (
              isLoading ? <ClipLoader color="#fff" />
                :
                <>
                  {
                    users.map((item) => <UserCard key={item.id} data={item} />)
                  }
                  <div className="userCards--buttons">
                    <span className="userCards--button" onClick={() => getUsers(1)}>1</span>
                    <span className="userCards--button" onClick={() => getUsers(2)}>2</span>
                  </div>
                </>

            )
        }
      </div>


    </div>
  );
}

export default App;
