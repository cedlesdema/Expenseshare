import React, { Component } from 'react'
import { Container, Button, FormGroup, Input, InputGroup } from 'reactstrap';

export default class FormExpense extends Component {

    constructor(props) {
        super(props);
        this.state = { title: "", category: "", amount:"", createdat:"", expense: null };
    }

    handleChangeF(event) {
        event.preventDefault();
        this.setState({ title: event.target.value });
    }
    handleChangeM(event) {
        event.preventDefault();
        this.setState({ amount: event.target.value });
    }
    handleChangeN(event) {
        event.preventDefault();
        this.setState({ category: event.target.value });
    }
    handleChangeE(event) {
        event.preventDefault();
        this.setState({ createdAt: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://php/expenseshare/public/expense/', {
            method: 'POST',
            body: JSON.stringify({ amount:this.state.amount, createdAt:this.state.createdAt, title: this.state.title, category: this.state.category, slug: this.props.slug })

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ expense: JSON.parse(data) });
                alert(' succès !');
                this.props.callBack(JSON.parse(data));

            })
            .catch(err => {
                console.log(err);
                alert('Erreur ');


            })
    }

    render() {
        return (
            <div>
                <h2>Formulaire d'ajout de dépenses</h2>
                <Container className="text-center mt-5 pt-4">
                    <h3 className="p-3 text-dark">Ajouter une depense {this.state.slug}</h3>
                    <form className="m-0 m-auto">
                        <FormGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.title} onChange={e => this.handleChangeF(e)} placeholder="Titre" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.amount} onChange={e => this.handleChangeM(e)} placeholder="Montant" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.category} onChange={e => this.handleChangeN(e)} placeholder="category" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.createdAt} onChange={e => this.handleChangeE(e)} placeholder="date" />
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

