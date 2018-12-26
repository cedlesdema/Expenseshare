import React, {Component} from 'react';
import {Table} from "reactstrap";
import FormPerson from "./FormPerson";
import {NavLink, Route} from "react-router-dom";




class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {persons: []}

    }

    handleNewPerson(person) {
        let persons = this.state.persons;
        persons.push(person);
        console.log('after :', persons);
        this.setState({ persons: persons });
    }

    componentDidMount(){
        fetch('http://php/expenseshare/public/person/group/' + this.props.slug)
            .then(response => response.json())
            .then(data=> this.setState({persons: data}));


    }


    render() {

        const  person = this.state.persons.map(person => {

            return (

                    <tbody>
                    <tr>
                        <th scope="row">{person.id}</th>
                        <td>{person.firstname}</td>
                        <td>{person.lastname}</td>
                        <td>{person.expenses.length}</td>
                        <td>{person.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)}€</td>
                    </tr>
                    </tbody>

        );
        });

        return (
            <React.Fragment>
                <h2>Dépense par personne</h2>


                <NavLink className="btn btn-success mb-4" to={this.props.match.url + '/add'}>Ajouter une personne</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <FormPerson {...props} callBack={this.handleNewPerson.bind(this)} slug={this.props.slug}/>}/>

                <Table hover key={person.id}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Depense</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    {person}
                </Table>
            </React.Fragment>
        );
    }
}

export default Persons;