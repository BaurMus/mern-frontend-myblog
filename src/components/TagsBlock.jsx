import React from 'react';

import {SideBlock} from "./SideBlock"
import List from '@mui/material/List';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from '@mui/material';
import TagIcon from "@mui/icons-material/Tag";

export const TagsBlock = ({items, isLoading = true}) => {
  return (
    <SideBlock title="Тэги">
      <List>
        {items.map((name, i) => (
          <a
            style={{color: "black"}}
            href={`/tags/${name}`}
          >
            <ListItem key={i} disablePadding>
               <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name}/>
                )}
               </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  )
} 