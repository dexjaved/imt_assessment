import React, { Component } from 'react';
import Cart from './components/Cart';
import Navbar from "./components/Navbar"


class App extends Component {

  render() {
    
    return (
        <React.Fragment>
            <Navbar/>
            <Cart/>
        </React.Fragment>
    );
  }
}

export default App;
