import React, { Component } from 'react'
import { Container, Button, FormGroup, Input, InputGroup } from 'reactstrap';

export default class FormPerson extends Component {

    constructor(props) {
        super(props);
        this.state = { firstname: "", lastname: ""};
    }

    handleChangeF(event) {
        event.preventDefault();
        this.setState({ firstname: event.target.value });
    }
    handleChangeN(event) {
        event.preventDefault();
        this.setState({ lastname: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://php/expenseshare/public/person/', {
            method: 'POST',
            body: JSON.stringify({ firstname: this.state.firstname, lastname: this.state.lastname, slug: this.props.slug })

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ firstname: "", lastname:""});
                alert('Nouvelle personne crée avec succès !');
                this.props.callBack(JSON.parse(data));

            })
            .catch(err => {
                console.log(err);
                alert('Erreur lors de la création de la personne');


    })
}


    render() {
        return (
            <div>
                <Container className="text-center mt-5 pt-4">
                    <h3 className="p-3 text-dark">Ajouter une personne au groupe {this.state.slug}</h3>
                    <form className="m-0 m-auto">
                        <FormGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.firstname} onChange={e => this.handleChangeF(e)} placeholder="Prénom" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.lastname} onChange={e => this.handleChangeN(e)} placeholder="Nom" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button onClick={e => this.handleCreate(e)} className="m-2 px-4 btn-lg btn-info">Ajouter</Button>
                        </FormGroup>
                    </form>
                </Container>

            </div>
        );
    }
}