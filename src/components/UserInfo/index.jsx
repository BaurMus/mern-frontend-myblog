import React from "react";
import styles from './UserInfo.module.scss';
import { Avatar } from "@mui/material";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      {/* {avatarUrl 
        ? <img className={styles.avatar} src={avatarUrl} alt={fullName}/> 
        : <Avatar className={styles.noAvatar}>B</Avatar>
      } */}
      <Avatar alt={fullName} src={avatarUrl} sx={{width:30,height:30,marginRight:1}}/>
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  )
}