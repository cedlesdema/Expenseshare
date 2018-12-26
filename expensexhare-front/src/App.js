import React, { Component } from 'react';
import './App.css';
import Accueil from "./Component/Accueil";
import {Container} from "reactstrap";
import {BrowserRouter, Route} from "react-router-dom";
import Group from "./Component/Group";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faMoneyBill, faMugHot, faBeer, faCookie } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faMoneyBill, faMugHot, faBeer, faCookie );







class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className= "App App-header">
        <Container>

          <Route path="/" exact component={Accueil}/>
          <Route path="/group/:slug" component={Group}/>
        </Container>
      </div>
        </BrowserRouter>


    )
  }
}

export default App;
