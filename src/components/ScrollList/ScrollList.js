import React from 'react';
import './ScrollList.css';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import Itemlist from './ItemList/ItemList';
import GridList from '@material-ui/core/GridList';


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
            <GridList cellHeight={500} cols={1}>
                <MenuList role="menu">
                    {itemlist}
                </MenuList>
            </GridList>
        );
    }
}
    
export default withStyles(styles)(ScrollList);
    