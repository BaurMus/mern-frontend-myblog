import React from "react";

import { Button, Paper, TextField } from "@mui/material";

import styles from './AddPost.module.scss';
import 'easymde/dist/easymde.min.css'
import SimpleMde from "react-simplemde-editor";

export const AddPost = () => {
  return (
    <Paper style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Загрузить изображение
      </Button>
      <input type="file" hidden />
      {true && (
        <>
          <Button variant='contained' color="error">
            Удалить
          </Button>
          <img className={styles.image} src={'https://kartinkof.club/uploads/posts/2022-09/thumbs/1662172416_1-kartinkof-club-p-novie-i-krasivie-kartinki-orel-1.jpg'} alt='Uploaded' />
        </>
      )}
      <br />
      <br />
      <TextField 
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField 
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Тэги"
        fullWidth
      />
      <SimpleMde className={styles.editor} />
      <div className={styles.buttons}>
        <Button size='large' variant="contained">
          {true ? 'Сохранить': 'Опубликовать'}
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  )
}