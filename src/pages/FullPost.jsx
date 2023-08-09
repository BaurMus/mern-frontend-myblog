import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CommentsBlock, Post, AddComment } from "../components";
import axios from "../axios";
import { formatTime } from "../utils";

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
        createdAt={formatTime(data.createdAt)}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text}/>
      </Post>
      <CommentsBlock 
        items={data.comments}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>  
    </>
  )
}