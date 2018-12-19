import React, { Component } from 'react';
import { Table } from "reactstrap";
import Menu from './Menu';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = { expense: [] };
    }

    componentDidMount() {
        fetch('http://php/expenseshare/public/expense', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ expense: data }))
        ;
    }

    render() {

        let expense = <div>Chargement en cours</div>;
        console.log(expense);

        if (this.state.expense.length > 0) {
            expense = this.state.expense.map(expense =>

                <tbody>
                <tr>
                    <th scope="row">{expense.id}</th>
                    <td>{expense.person.firstname + ' ' + expense.person.lastname}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.title}</td>
                    <td>{expense.category.label}</td>
                    <td>{expense.person.shareGroup}</td>
                </tr>
                </tbody>
            );
        }

        return (
            <React.Fragment>
                <Menu/>
                <h1>Dépenses</h1>
                <Table hover key={expense.id}>

                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dépense</th>
                        <th>Description</th>
                        <th>Catégorie</th>
                        <th>Groupe</th>
                    </tr>
                    </thead>

                    {expense}
                </Table>

            </React.Fragment>

        );
    }
}