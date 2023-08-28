import React from "react";

import style from './ProfileViewCard.module.css';

export default function ProfileViewCard(props) {
    const classes = `${props.classNames} ${style["profile-view-card"]}`
  return (
    <div className={classes}>
      <div className={style.heading}>{props.heading}</div>
      <div className={style.divider}></div>
      <p className={style.info}>
        {props.children}
      </p>
    </div>
  );
}
