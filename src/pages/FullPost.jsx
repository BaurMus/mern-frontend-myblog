import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CommentsBlock, Post, AddComment } from "../components";
import axios from "../axios";

export const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  React.useEffect(() => {
    axios.get(`posts/${id}`).then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(err => {
      console.warn(err);
      alert('Ошибка при получении статьи');
    })
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />
  }

  return (
    <>
      <Post 
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}` : ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text}/>
      </Post>
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
      >
        <AddComment />
      </CommentsBlock>  
    </>
  )
}