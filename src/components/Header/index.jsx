import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import styles from './Header.module.scss';
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>BAURMUS BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {false ? (
              <>
                <Link to="/add-post">
                  <Button variant='contained'>Написать статью</Button>
                </Link>
                <Button variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant='outlined'>Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}