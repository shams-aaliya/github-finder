import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx'

class App extends Component {

  render(){
  return (
      <div className="App">
      <Navbar />
      <h1>Hello it's a new day</h1>
      </div>
    );
  }
}

export default App;