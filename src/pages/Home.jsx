import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPopularPosts, fetchPosts, fetchTags } from '../redux/slices/posts';
import { formatTime } from '../utils';

export const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const {posts, tags} = useSelector(state => state.posts);
  const [valueTab, setValueTab] = useState('one');

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  React.useEffect(() => {
      if (valueTab === 'one') {
        dispatch(fetchPosts());
      } else if (valueTab === 'two') {
        dispatch(fetchPopularPosts());  
      }  
      dispatch(fetchTags());
  }, [valueTab]);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} onChange={handleChangeTab} value={valueTab} aria-label="basic tabs example">
        <Tab value="one" label="Новые" />
        <Tab value="two" label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => 
            isPostsLoading ? 
              (
                <Post key={index} isLoading={true} />
              ) : (
                <Post 
                  id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                  user={obj.user}
                  createdAt={formatTime(obj.createdAt)}
                  viewsCount={obj.viewsCount}
                  commentsCount={3}
                  tags={obj.tags}
                  isEditable={userData?._id === obj.user._id}
                />
              )
          )}
          
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
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
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  )

}