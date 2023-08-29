import React from 'react'
import style from './ProfileList.module.css';

export default function ProfileList(props) {
  return (
    <div className={style['profile-list']}>
      {props.children}
    </div>
  )
}
