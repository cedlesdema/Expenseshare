import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import FormExpense from "./FormExpense";
import {Table} from "reactstrap";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {expenses: []}

    }
    handleNewExpense(expense) {
        let persons = this.state.expenses;
        persons.push(expense);
        console.log('after :', expense);
        this.setState({ expenses: expense });
    }
    componentDidMount () {
        fetch('http://php/expenseshare/public/expense/group/' + this.props.slug)
            .then(response => response.json())
            .then(data=> this.setState({expenses: data}))

}
    render() {
        const  expense = this.state.expenses.map(expense => {

            return (

                <tbody>
                <tr>
                    <th scope="row">{expense.id}</th>
                    <td>{expense.title}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category.label}</td>
                    <td><FontAwesomeIcon icon={expense.category.icon}/></td>
                    <td>{moment(expense.createdAt).format('l')}</td>

                </tr>
                </tbody>

            );
        });
        return (
            <div>
                <h2>Expenses</h2>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <FormExpense {...props} callBack={this.handleNewExpense.bind(this)} slug={this.props.slug}/>}/>

                    {/* Afficher la liste des dépense*/}
            <React.Fragment>
            <h2>Liste des dépenses</h2>
        <Table hover key={expense.id}>
            <thead>
            <tr>
                <th>#</th>
                <th>titre</th>
                <th>montant</th>
                <th>category</th>
                <th>icon</th>
                <th>date</th>
            </tr>
            </thead>
            {expense}
        </Table>
        </React.Fragment>
            </div>
        );
    }
}

export default Expenses;