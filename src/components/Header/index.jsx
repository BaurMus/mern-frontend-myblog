import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>BAURMUS BLOG</div>
          </Link>
        </div>
      </Container>
    </div>
  )
}