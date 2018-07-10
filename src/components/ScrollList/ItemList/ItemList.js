import React from 'react';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';

import './ItemList.css';

const styles = {
    splitterStyle: {
        height: '1px',
        width: '1px',
        top: 20, 
        right: -40,
    }
};

const itemlist = (props) => {
    return (
        <div>
            <li>
                <Divider inset />
            </li>
            <ListItem button>
                <div>
                    <div class="circle-responsive">
                        <div class="circle-content">
                            <span>L</span>
                        </div>
                    </div>
                </div>
                
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