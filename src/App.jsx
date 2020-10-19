import React, { Component } from 'react';
import Navbar from "./components/layout /Navbar"
import Users from './components/user/Users'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;