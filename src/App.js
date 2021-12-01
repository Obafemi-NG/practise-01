import React from 'react';
import Lifecycle from './Lifecycle'

import logo from './logo.svg';
import './App.css';

 class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reasonsToLive : 47,
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return (
        {reasonsToLive : prevState.reasonsToLive + 1}
      )
    }, () => console.log(this.state.reasonsToLive))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Lifecycle text = '_hello' />
        </header>
      </div>
    );
  }
  
}

export default App;
