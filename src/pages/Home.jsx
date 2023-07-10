import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import { Post } from '../components/Post';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          <Post 
            id={1}
            title={'Тестовая статья'}
            imageUrl={`https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg`}
            user={{fullName:'Валера Тапочкин', avatarUrl:'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'}}
            createdAt={new Date().toLocaleString()}
            viewsCount={0}
            commentsCount={3}
            tags={['react','mongo','node']}
            isEditable
            isLoading={true}
          />
        </Grid>
      </Grid>
    </>
  )

}