import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import styles from './Header.module.scss';
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>BAURMUS BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {true ? (
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
              
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}