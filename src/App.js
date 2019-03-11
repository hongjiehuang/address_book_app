import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import People from './People_list/People_list.js';
class App extends Component {
/*   state={
  } */
  
  render(){
    return(
      <div className="App">
        <Container>
        <header className="App-header text-center">
        <h1>Address Book App</h1>
        </header>
        </Container>
  

      </div>
    )
  }
}
export default App;
