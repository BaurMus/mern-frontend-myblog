import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Button, Paper, TextField, Typography } from "@mui/material";
import styles from './Login.module.scss';

import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: '123',
    }
  });

  const onSubmit = async(values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизоваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to='/' /> 
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{root: styles.title}} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', {required: "Укажите почту"})}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message} 
          className={styles.field}
          label="E-mail"
          type='email'
          fullWidth
        />
        <TextField 
          {...register('password', {required: "Укажите пароль"})}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          className={styles.field}
          label="Пароль"
          type="password"
          fullWidth
        />
        <Button type='submit' disabled={!isValid} size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  )
}