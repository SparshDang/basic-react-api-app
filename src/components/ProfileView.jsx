import React from "react";
import ReactDOM from "react-dom";

import style from "./ProfileView.module.css";

import ProfileViewCard from "./ProfileViewCard";

export default function ProfileView(props) {
  const person = props.person;

  const object = (
    <div className={style["overlay-container"]} onClick={props.closeProfile}>
      <div className={style["profile-container"]}>
        <ProfileViewCard heading={"Profile"}>
          <div className={style['person-info']}>
            <div className={style["image-container"]}>
              <img src={person.picture.large} alt="" />
            </div>
            <div className={style["info-container"]}>
              <h1>
                {person.name.title}. {person.name.first} {person.name.last}
              </h1>
              <h3 className={style.username}>#{person.login.username}</h3>
              <h4>
                Gender : {person.gender} <br />
                DOB: {new Date(person.dob.date).toLocaleDateString()}
              </h4>
            </div>
          </div>
        </ProfileViewCard>

        <ProfileViewCard heading={"Contacts"}>
          Email : {person.email} <br />
          Phone : {person.phone}
        </ProfileViewCard>
      </div>
    </div>
  );
  return ReactDOM.createPortal(object, document.getElementById("overlays"));
}
