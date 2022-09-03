import React from "react";

const UserCard = ({ data }) => {

  return (
    <div className="userCard">

      <img className="userCard__image" src={data.avatar} />

      <div className="userCard__info">
        <div className="userCard__info--name">{`${data.first_name} ${data.last_name}`}</div>
        <div className="userCard__info--email">{data.email}</div>
      </div>
    </div>
  )
}

export default UserCard;