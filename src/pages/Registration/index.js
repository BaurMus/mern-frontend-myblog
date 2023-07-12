import React from "react";

import styles from "./Registration.module.scss";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

export const Registration = () => {
  return (
    <Paper classes={{root: styles.root}}>
      <Typography classes={{root: styles.title}} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{width: 100, height: 100}}/>
      </div>
      <form>
        <TextField 
          className={styles.field}
          label="Полное имя"
          fullWidth
        />
        <TextField 
          type="email"
          className={styles.field}
          label="E-mail"
          fullWidth
        />
        <TextField
          type="password"
          className={styles.field}
          label="Пароль"
          fullWidth
        />
        <Button disabled={false} size='large' variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  )
}