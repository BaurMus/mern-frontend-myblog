import React from "react";
import { CommentsBlock, Post, AddComment } from "../components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const FullPost = () => {
  if(false) {
    return <Post isLoading={true} isFullPost />
  }

  return (
    <>
      <Post 
        id={1}
        title={'Тестовая статья'}
        imageUrl={'https://kartinkof.club/uploads/posts/2022-09/thumbs/1662172416_1-kartinkof-club-p-novie-i-krasivie-kartinki-orel-1.jpg'}
        user={'Валера Тапочкин'}
        createdAt={new Date().toLocaleString()}
        viewsCount={1}
        commentsCount={3}
        tags={["react", "express", "mongo"]}
        isFullPost
      >
        <ReactMarkdown children={`
        # 🛠 Технологии:

        - **ReactJS 18**
        - **TypeScript**
        - **Redux Toolkit** (хранение данных / пицц)
        - **React Router v6** (навигация)
        - **Axios + Fetch** (отправка запроса на бэкенд)
        - **React Hooks** (хуки)
        - **Prettier** (форматирование кода)
        - CSS-Modules / SCSS (стилизация)
        - React Content Loader (скелетон)
        - React Pagination (пагинация)
        - Lodash.Debounce
        - Code Splitting, React Loadable, useWhyDidYouUpdate"`}/>
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