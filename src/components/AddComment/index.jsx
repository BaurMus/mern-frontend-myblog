import React, { useState } from "react";

import styles from "./AddComment.module.scss";
import { Avatar, Button, TextField } from "@mui/material";
import axios from '../../axios';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const AddComment = () => {
  const {id} = useParams();
  const [comment, setComment] = useState();
  const userData = useSelector((state) => state.auth.data);

  const onSubmit = async () => {
    let usersComment = {
      name: userData.fullName,
      comment: comment,
      users: userData.avatarUrl
    };

    try {
      await axios.patch(`/comment/${id}`, usersComment);
      alert("Комментарий успешно добавлен");
    } catch (err) {
      console.warn(err);
      alert('Ошибка при добавлении комментария');
    }
  };

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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={onSubmit}>Отправить</Button>
        </div>
      </div>
    </>
  )
}