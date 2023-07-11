import React from "react";

import styles from "./AddComment.module.scss";
import { Avatar, Button, TextField } from "@mui/material";

export const AddComment = () => {
  return (
    <>
      <div className={styles.root}>
        <Avatar 
          classes={{ root: styles.avatar }}
          src="https://messenge.ru/wp-content/cache/thumb/d2/d050ece6dd983d2_730x440.jpg"
        />
        <div className={styles.form}>
          <TextField 
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  )
}