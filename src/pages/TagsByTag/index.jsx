import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';

import { Post } from '../../components/Post';
import { fetchPostsByTag } from '../../redux/slices/posts';
import { formatTime } from '../../utils';
import styles from './TagsByTag.module.scss';
import { useParams } from 'react-router-dom';

export const TagsByTag = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const {posts} = useSelector(state => state.posts);

  const isPostsLoading = posts.status === 'loading';

  const {tag} = useParams();

  React.useEffect(() => {
      dispatch(fetchPostsByTag(tag));
  }, []);

  return (
    <>
      <h1>#{tag}</h1>
      <Grid container spacing={4} className={styles.root}>
        <Grid xs={8} className={styles.posts} item>
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
                  commentsCount={obj.comments.length}
                  tags={obj.tags}
                  isEditable={userData?._id === obj.user._id}
                />
              )
          )}
          
        </Grid>
      </Grid>
    </>
  )

}