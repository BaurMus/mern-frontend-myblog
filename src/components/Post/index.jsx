import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Clear";
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from "../UserInfo";
import {PostSkeleton} from "./Skeleton.jsx";

export const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable
}) => {
  if (isLoading) {
    return <PostSkeleton />
  }

  return (
    <div className={styles.root}>
      <div className={styles.editButtons}>
        <Link to={`/posts/edit`}>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </div>
      <img 
        className={styles.image}
        src={imageUrl}
        alt={title}
      />
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt}/>
        <div className={styles.indention}>
          <h2 className={styles.title} >
            <Link to='/posts/1'>{title}</Link>
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`} >#{name}</a>
              </li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};