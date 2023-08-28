import React from "react";
import style from "./ProfileCard.module.css";

export default function ProfileCard(props) {
  const person = props.person;
  return (
    <div className={style["person-card"]}>
      <div className={style["image-container"]}>
        <img className={style.image} src={person.picture.large} alt="" />
      </div>
      <div className={style.divider}></div>
      <div className={style.info}>
        <h3 className={style.name}>
          {person.name.title}. {person.name.first} {person.name.last}
        </h3>
        <h4 className={style["secondary-text"]}>
          {new Date(person.dob.date).toDateString()}
        </h4>
        <h4 className={style["secondary-text"]}>{person.email}</h4>
      </div>
    </div>
  );
}
