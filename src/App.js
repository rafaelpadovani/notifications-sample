import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const API = 'https://www.mocky.io/v2/5b4315f12e00004c002230c3';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      dataIndexes: [],
    }

    

    fetch(API)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then((json) => {
            let arrayToState = [];
            for (let i = 0; i < json.length; i++) { 
              arrayToState.push(true);
            }
            this.setState({ data: json, isLoading: false, dataIndexes : arrayToState})
            
          })
          .catch(error => this.setState({ error }));
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <CircularProgress style={{left: '50%', top: '50%', position: 'fixed'}} />;
    }
    return (
      <div className="App">
        <Navbar 
          dataApi={this.state.data}
          arrayIndexes={this.state.dataIndexes}  />
      </div>
    );
  }
}

export default App;
