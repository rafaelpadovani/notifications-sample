import React from 'react';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

const itemlist = (props) => {
    return (
        <div>
            <li>
                <Divider inset />
            </li>
            <ListItem button>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                <ListItemText 
                    primary={props.postTitle} 
                    secondary={props.type} />
            </ListItem>
        </div>
    );
};

export default itemlist;