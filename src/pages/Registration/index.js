import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Registration.module.scss";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import axios from '../../axios';

export const Registration = () => {
  const inputFileRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      fullName: 'Гоша Попугаев',
      email: 'gosha@test.ru',
      password: '1234',
      avatarUrl
    },
    mode: 'onChange'
  });

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const {data} = await axios.post('/upload/avatar', formData); 
      setAvatarUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла");
    }
  };

  const onClickRemoveImage = () => {
    setAvatarUrl('');
  };

  const onSubmit = async (values) => {
    values.avatarUrl = avatarUrl;
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

  };

  console.log(avatarUrl);

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <Paper classes={{root: styles.root}}>
      <Typography classes={{root: styles.title}} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{width: 100, height: 100}}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          {...register('fullName', {required: 'Укажите полное имя'})}
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          className={styles.field}
          label="Полное имя"
          fullWidth
        />
        <TextField 
          type="email"
          {...register('email', {required: 'Укажите почту'})}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          className={styles.field}
          label="E-mail"
          fullWidth
        />
        <TextField
          type="password"
          {...register('password', {required: 'Укажите пароль'})}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          className={styles.field}
          label="Пароль"
          fullWidth
        />
        <Button 
          style={{marginBottom: "15px"}} 
          onClick={() => inputFileRef.current.click()} 
          variant="outlined" 
          size="large"
        >
          Загрузить аватар
        </Button>
        <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
        {avatarUrl && (
          <>
            <Button variant='contained' color="error" onClick={onClickRemoveImage}>
              Удалить
            </Button>
            <img className={styles.image} src={`${process.env.REACT_APP_API_URL}${avatarUrl}`} alt='Uploaded' />
          </>
         )}
        <Button type='submit' size='large' variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  )
}