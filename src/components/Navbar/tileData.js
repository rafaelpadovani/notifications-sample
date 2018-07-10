// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';


export const mailFolderListItems = (
  <div>
    <ListItem button onClick={()=> window.open("https://github.com/rafaelpadovani/notifications-sample", "_blank")}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Source code" />
    </ListItem>
  </div>
);

