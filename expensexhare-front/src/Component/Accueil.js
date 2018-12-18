import React, {Component} from 'react';
import { Button, Form, FormGroup, Input} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Redirect} from "react-router-dom";







class Accueil extends Component {
    render() {
        return (
            <Form>
                <h1>Saisissez l'identifiant du groupe</h1>

                <FormGroup>
                    <Input type="text"  id="groupid" placeholder="GroupID" />
                </FormGroup>
                <Button onClick={} className="btn-success">Créér</Button> <Button className="btn-danger" >Ouvrir</Button>

            </Form>

        );

    }
}
export default Accueil;