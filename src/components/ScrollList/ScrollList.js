import React from 'react';
import './ScrollList.css';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const API = 'http://www.mocky.io/v2/5b4315f12e00004c002230c3';

const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
  };

class ScrollList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            hasMore: true,
        }


        fetch(API)
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Something went wrong ...');
            }
        })
        .then((json) => this.setState({ data: json }))
        .catch(error => this.setState({ error }));
           
    }
    
    
    render() {
        return (
            <MenuList role="menu">
                <ListItem button>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText 
                        primary="Nome da Pessoa, Nome da Pessoa e mais tantas pessoas curtiram sua foto." 
                        secondary="Jan 9, 2014" />
                </ListItem>
                <li>
                    <Divider inset />
                </li>
                <ListItem button>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText 
                        primary="Nome da Pessoa, Nome da Pessoa e mais tantas pessoas curtiram sua foto." 
                        secondary="Jan 9, 2014" />
                </ListItem>
                <li>
                    <Divider inset />
                </li>
                <ListItem button>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText 
                        primary="Nome da Pessoa, Nome da Pessoa e mais tantas pessoas curtiram sua foto." 
                        secondary="Jan 9, 2014" />
                </ListItem>
            </MenuList>
        );
    }
}
    
export default withStyles(styles)(ScrollList);
    