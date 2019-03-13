import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import People_list from './People_list/People_list.js';
import {generate} from 'randomstring';

class App extends Component {
  state={
    peoples: [
      { "key": generate(10),
        FirstName: "Cathy" ,
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"},
      {
        "key": generate(10),
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },

      {
        "key": generate(10),
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
          
      },

      {
        "key": generate(10),
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },

      {
        "key": generate(10),
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },

      {
        "key": generate(10),
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
           
    ],
      "Firstname_input": '',
      "Lastname_input":'',
      "Birthday_input":'',
      "Telephone_input":'',
      "searchkey":''
  }
  render(){

    return(
      <div className="App">
        <Container>
          <h1>Address Book App</h1>
          <People_list peoples={this.state.peoples}/>
        </Container>
  

      </div>
    )
  }
}
export default App;
