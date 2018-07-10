import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import Itemlist from './ItemList/ItemList';
import GridList from '@material-ui/core/GridList';

import './ScrollList.css';


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

class ScrollList extends React.Component{
    
    render() {
        let itemlist = null;

        itemlist = (
            <div>
                {this.props.arrayData.map((data, index) => {
                    return <Itemlist 
                        dataArr={data}
                        key={data.post.id.concat(index)}/>
                })}
            </div>
        );

        return (
            <div >
                <GridList cellHeight={450} cols={1}>
                    <MenuList role="menu">
                        {itemlist}
                    </MenuList>
                </GridList>
            </div>
        );
    }
}
    
export default withStyles(styles)(ScrollList);
    