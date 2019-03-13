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

  addNewPeopleHandler = (event) =>
  {
    event.preventDefault();
    let newpeople = {
      key: generate(10),
      FirstName: this.state.Firstname_input,
      LastName: this.state.Lastname_input,
      Birthday: this.state.Birthday_input,
      Telephone: this.state.Telephone_input
    };
    this.setState({peoples:[...this.state.peoples,newpeople]});
    this.setState({Firstname_input:''});
    this.setState({Lastname_input:''});
    this.setState({Birthday_input:''});
    this.setState({Telephone_input:''});
  }

  deletePeopleHandler = (index, e) => {
    let confirm = window.confirm("Do you want to remove this pereson from the address book?");
   
    if(confirm){
    const peoples = [...this.state.peoples];
    let people_want_to_delete = peoples.findIndex(
      
      (people)=>people.key===index);
       peoples.splice(people_want_to_delete, 1);
    this.setState({peoples : peoples});
    }

  }

  render(){

    return(
      <div className="App">
        <Container>
          <h1>Address Book App</h1>
          <People_list peoples={this.state.peoples}
          click={this.deletePeopleHandler}/>

          <div style={{textAlignVertical: "center",textAlign: "center",}}>
            <br></br> 
            <h2 className="text-center">Add new address here:</h2>

            <Form className="text-center" onSubmit = {this.addNewPeopleHandler}>
              <Form.Group className="col-md-6 ">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Please enter the first name"
                  value={this.state.Firstname_input}
                  onChange={(e)=>this.setState({Firstname_input: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Please enter the last name"
                  value={this.state.Lastname_input}
                  onChange={(e)=>this.setState({Lastname_input: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="text" placeholder="Please enter the birthday"
                  value={this.state.Birthday_input}
                  onChange={(e)=>this.setState({Birthday_input: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="text" placeholder="Please enter the Telephone number"
                  value={this.state.Telephone_input}
                  onChange={(e)=>this.setState({Telephone_input: e.target.value})}/>
              </Form.Group>

              <Form.Group className="submit-button">
                <Button className="btn btn-info" type="submit">
                  Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
  

      </div>
    )
  }
}
export default App;
