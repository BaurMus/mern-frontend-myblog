import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

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
            isLoading={false}
          />
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={["react", "node", "mongo"]} isLoading={false} />
          <CommentsBlock 
            items={[
              {
                user: {
                  fullName: 'Валера Тапочкин',
                  avatarUrl: "https://messenge.ru/wp-content/cache/thumb/d2/d050ece6dd983d2_730x440.jpg"
                },
                text: 'Я Валера Тапочкин, это мой первый комментарий',
              },
              {
                user: {
                  fullName: 'Афанасий Стрелочник',
                  avatarUrl: 'https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg'
                },
                text: 'Я Афанасий Стрелочник, вы видели мой глаз',
              },
            ]}
            isLoading={true}
          />
        </Grid>
      </Grid>
    </>
  )

}