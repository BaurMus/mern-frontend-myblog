import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

import styles from './Login.module.scss';

export const Login = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{root: styles.title}} variant="h5">
        Вход в аккаунт
      </Typography>
      <form>
        <TextField 
          className={styles.field}
          label="E-mail"
          type='email'
          fullWidth
        />
        <TextField 
          className={styles.field}
          label="Пароль"
          type="password"
          fullWidth
        />
        <Button size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  )
}