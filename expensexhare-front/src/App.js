import React, { Component } from 'react';
import './App.css';
import ListGroupFilter from "./Component/ListGroupFilter";
import Accueil from "./Component/Accueil";
import {Container} from "reactstrap";
import {Route} from "react-router-dom";
import ListPerson from "./Component/ListPerson";
import ListDebt from "./Component/ListDebt";





class App extends Component {
  render() {
    return (
      <div className= "App App-header">
        <Container>
          <Route path="/" exact component={Accueil}/>
          <Route path="/sharegroup" component={ListGroupFilter}/>
            <Route path="/persons" component={ListPerson}/>
            <Route path="/debts" component={ListDebt}/>
        </Container>


      </div>


    )
  }
}

export default App;
