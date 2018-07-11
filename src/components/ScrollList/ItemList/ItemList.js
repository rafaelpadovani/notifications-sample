import React from 'react';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
// import TextTruncate from 'react-text-truncate'; 

// import ListItemText from '@material-ui/core/ListItemText';

import './ItemList.css';



const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 500,
    },
});


// const itemlist = (this.props) => {
class itemlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            colorBack: '#f7f9ff',
        }
    }

    render () {
        const { classes } = this.props;

        let personNames = null;
        let totalPersons = null;
        let firstName = null;
        let secondName = null;
        let avatarImage = null;

        if (this.props.dataArr.type === 'Like') {
            if (!this.props.dataArr.likes[0].image) {
                avatarImage = (
                    <Avatar>
                        <AccountCircle />
                    </Avatar>
                );
            } else {
                avatarImage = (
                    <Avatar className={classes.avatar} src={this.props.dataArr.likes[0].image}/>
                );
            }
        } else {
            if (!this.props.dataArr.comments[0].image) {
                avatarImage = (
                    <Avatar>
                        <AccountCircle />
                    </Avatar>
                );
            } else {
                avatarImage = (
                    <Avatar className={classes.avatar} src={this.props.dataArr.comments[0].image}/>
                );
            }
        }

        function checkNamePerson (name) {
            if (name !== null && name !== '') {
                return name;
            } else {
                return 'Anonymous User';
            }
        }

        if (this.props.dataArr.type === 'Like') {
            totalPersons = this.props.dataArr.likes.length-2;
            if (this.props.dataArr.likes.length > 2) {
                firstName = this.props.dataArr.likes[0].name;
                firstName = checkNamePerson(firstName);
                secondName = this.props.dataArr.likes[1].name;
                secondName = checkNamePerson(secondName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName + ', ' + secondName + ' and ' + totalPersons + ' others '}</strong> 
                            <span className="actionLike">liked</span> your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                    </div>
                );
            }else if (this.props.dataArr.likes.length === 2) {
                firstName = this.props.dataArr.likes[0].name;
                firstName = checkNamePerson(firstName);
                secondName = this.props.dataArr.likes[1].name;
                secondName = checkNamePerson(secondName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName + ' and ' + secondName + ' '}</strong> 
                            <span className="actionLike">liked</span> your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                    </div>
                );
            }else {
                firstName = this.props.dataArr.likes[0].name;
                firstName = checkNamePerson(firstName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName + ' '}</strong> 
                            <span className="actionLike">liked</span> your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                    </div>
                );
            }
            // console.log(this.props.dataArr.likes.length);
        }else{
            totalPersons = this.props.dataArr.comments.length-2;
            if (this.props.dataArr.comments.length > 2) {
                firstName = this.props.dataArr.comments[0].name;
                firstName = checkNamePerson(firstName);
                secondName = this.props.dataArr.comments[1].name;
                secondName = checkNamePerson(secondName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName  + ', ' + secondName + ' and ' + totalPersons + ' others '}</strong>
                            <span className="actionComment">commented</span> on your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                    </div>
                );
            }else if (this.props.dataArr.comments.length === 2) {
                firstName = this.props.dataArr.comments[0].name;
                firstName = checkNamePerson(firstName);
                secondName = this.props.dataArr.comments[1].name;
                secondName = checkNamePerson(secondName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName + ' and ' + secondName + ' '}</strong> 
                            <span className="actionComment">commented</span> on your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                     </div>
                );
            }else {
                firstName = this.props.dataArr.comments[0].name;
                firstName = checkNamePerson(firstName);
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{firstName + ' '}</strong> 
                            <span className="actionComment">commented</span> on your post: 
                            <span className="namePost">{' "' + this.props.dataArr.post.title + '"'}</span>
                        </p>
                    </div>
                );
            }
            // console.log(this.props.dataArr.comments.length);
        }
    return (
        <div className={classes.root} style={this.props.timesOpened > 1 ? { backgroundColor: '#fff'} : { backgroundColor: '#f7f9ff'}}>
            <li>
                <Divider />
            </li>
            <ListItem button style={{paddingLeft: 10}}>
                <div>
                    <div className={this.props.dataArr.type === 'Like' ? 'circle-responsive-like' : 'circle-responsive-comment'}>
                        <div className="circle-content">
                            <span>{this.props.dataArr.type === 'Like' ? 'L' : 'C'}</span>
                        </div>
                    </div>
                </div>

                {avatarImage}
                {personNames}

            </ListItem>
        </div>
    );
};
};

export default withStyles(styles)(itemlist);