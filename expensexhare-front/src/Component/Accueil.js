import React, {Component} from 'react';
import { Button, Form, FormGroup, Input} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from "react-router-dom";

class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ slug: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://php/expenshare/public/sharegroup/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouveau groupe créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création du groupe'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://php/expenseshare/public/sharegroup/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ sharegroup: JSON.parse(data) });
            })
            .catch(err => {
                console.log(err);
                alert('Ce groupe n\'existe pas !');
            })
        ;
    }

    render() {
        if (this.state.sharegroup) {
            return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
        }

        return (
            <Form>
                <h1>Saisissez l'identifiant du groupe</h1>

                <FormGroup>
                    <Input type="text" value={this.state.slug} onChange={e => this.handleChange(e)} placeholder="GroupID" />
                </FormGroup>
                <Button onClick={e => this.handleCreate(e)} className="btn-success">Créér</Button>
                
                <Button onClick={e => this.handleOpen(e)} className="btn-danger" >Ouvrir</Button>

            </Form>

        );

    }
}
export default Accueil;