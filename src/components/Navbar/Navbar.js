import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import classNames from 'classnames';

import ScrollList from '../ScrollList/ScrollList';

const API = 'http://www.mocky.io/v2/5b4315f12e00004c002230c3';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            open: false,
            left: false,
            anchorEl: null,
            notifications : [{
                id: 1,
                title: 'some title', // not required
                message: 'The notification text', 
                new: false, // if the user has read the notification
                tags: [{ // not required
                    type: 'success',
                    text: 'text'
                }],
                date: '09/12/2016' // not required
            }]
        };
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


    // Drawer
    toggleDrawer = (side, open) => () => {
        this.setState({
        [side]: open,
        });
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget, open: true });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        // console.log(this.state.data);
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const sideList = (
        <div className={classes.list}>
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
        </div>
        );

        let badgeNotf = null;

        if (!this.state.open) {
            badgeNotf = (
                <Badge badgeContent={this.state.data.length > 99 ? '+99' : this.state.data.length} color="secondary">
                    <NotificationIcon />
                </Badge>
            );
        }else{
            badgeNotf = (
                <NotificationIcon />
            );
        }


        return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    Phasee Assignment
                </Typography>
                <div>
                <Manager>
                    <Target>
                        <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                        >
                        {badgeNotf}
                        </IconButton>
                    </Target>
                    <Portal>
                        <Popper
                            placement="bottom"
                            eventsEnabled={open}
                            className={classNames({ [classes.popperClose]: !open })}
                            >
                        <ClickAwayListener onClickAway={this.handleClose}>
                            <Collapse in={open} id="menu-list-collapse" style={{ transformOrigin: '0 0 0' }}>
                            <Paper style={{ margin: 3 }}>
                                <div>
                                    <Typography component="p">
                                        New
                                    </Typography>
                                </div>
                                <ScrollList />
                            </Paper>
                            </Collapse>
                        </ClickAwayListener>
                        </Popper>
                    </Portal>
                </Manager>
                </div>


            </Toolbar>
            </AppBar>


            <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}>
                {sideList}
            </div>
            </SwipeableDrawer>


        </div>
        );
    }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
