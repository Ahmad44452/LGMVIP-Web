import React from "react";

const StudentCard = ({ values }) => {

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content--name">{values.name}</p>
        <p className="card__content--gender">{values.gender}</p>
        <p className="card__content--email">{values.email}</p>
        <a className="card__content--website" target="_blank" rel="noreferrer" href={values.website}>{values.website}</a>
        <p className="card__content--skills">
          {
            values.skills.map((item, key) => (`${item} `))
          }
        </p>
      </div>
      <div className="card__image">
        <img className="card__image" alt="Profile" src={values.image} />
      </div>
    </div>
  )
}

export default StudentCard;