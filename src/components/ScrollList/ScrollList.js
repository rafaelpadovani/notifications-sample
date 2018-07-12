import React from 'react';
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
    constructor(props) {
        super(props);
        this.state = {
            statusView : this.props.arrayIndexes,
        }
        console.log(this.state.statusView);
    }

    clickItemHandle = (index) => {
        let arrayToState = [...this.state.statusView];
        arrayToState[index] = false;
        console.log(arrayToState);
        this.setState({statusView: arrayToState});
    }
    
    render() {
        let itemlist = null;

        itemlist = (
            <div>
                {this.props.arrayData.map((data, index) => {
                    return <Itemlist 
                        clicked={() => this.clickItemHandle(index)}
                        statusView={this.state.statusView[index]}
                        dataArr={data}
                        timesOpened={this.props.opened}
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
    