import React from 'react';
import './ScrollList.css';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import Itemlist from './ItemList/ItemList';

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
        let itemlist = null;

        itemlist = (
            <div>
                {this.state.data.map((data, index) => {
                    return <Itemlist
                    type={data.type}
                    postTitle={data.post.title}
                    likes={data.likes}
                    key={data.post.id}/>
                })}
            </div>
        );

        return (
            <MenuList role="menu">
                {itemlist}
            </MenuList>
        );
    }
}
    
export default withStyles(styles)(ScrollList);
    