import React from 'react';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';

// import ListItemText from '@material-ui/core/ListItemText';

import './ItemList.css';


const itemlist = (props) => {

        let personNames = null;

        if (props.dataArr.type === 'Like') {
            // let firstNameLike = null;
            // let secondNameLike = null;
            if (props.dataArr.likes.length > 2) {
                
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.likes[0].name + ', ' + props.dataArr.likes[1].name + ' '}</strong> 
                            and {props.dataArr.likes.length-2} others liked your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                    </div>
                );
            }else if (props.dataArr.likes.length === 2) {
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.likes[0].name + ' and ' + props.dataArr.likes[1].name + ' '}</strong> 
                            liked your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                    </div>
                );
            }else {
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.likes[0].name + ' '}</strong> 
                            liked your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                    </div>
                );
            }
            // console.log(props.dataArr.likes.length);
        }else{
            if (props.dataArr.comments.length > 2) {
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.comments[0].name + props.dataArr.comments[1].name + ' '}</strong>
                            and {props.dataArr.comments.length-2} others commented on your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                    </div>
                );
            }else if (props.dataArr.comments.length === 2) {
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.comments[0].name + ' and ' + props.dataArr.comments[1].name + ' '}</strong> 
                            commented on your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                     </div>
                );
            }else {
                personNames = (
                    <div className='contentRow'>
                        <p>
                            <strong>{props.dataArr.comments[0].name + ' '}</strong> 
                            commented on your post: {' "' + props.dataArr.post.title + '"'}
                        </p>
                    </div>
                );
            }
            // console.log(props.dataArr.comments.length);
        }
        


    return (
        <div>
            <li>
                <Divider />
            </li>
            <ListItem button>
                <div>
                    <div className={props.dataArr.type === 'Like' ? 'circle-responsive-like' : 'circle-responsive-comment'}>
                        <div className="circle-content">
                            <span>{props.dataArr.type === 'Like' ? 'L' : 'C'}</span>
                        </div>
                    </div>
                </div>
                
                <Avatar>
                    <ImageIcon />
                </Avatar>
                {personNames}

            </ListItem>
        </div>
    );
};

export default itemlist;