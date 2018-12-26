import React, { Component } from 'react'
import { Container, Button, FormGroup, Input, InputGroup } from 'reactstrap';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { expense: "", firstname: "", lastname: "", person: null };
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
            body: JSON.stringify({ expense:this.state.expenses, firstname: this.state.firstname, lastname: this.state.lastname, slug: this.props.slug })

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ person: JSON.parse(data) });
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
            </div>
        );
    }
}

export default Form;