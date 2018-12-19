import React, {Component} from 'react';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {persons: []}
    }

    componentDidMount(){
        fetch('http://php/expenseshare/public/person/group' + this.props.slug)
            .then(response => response.json())
            .then(data=> this.setState({persons: data}))
    }


    render() {

        const  persons = this.state.persons.map(person => {
            let total = person.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)
            return (

            <li>
                {person.firstname}
                {person.expenses.length} dépense(s)<br/>
                Total : {total}
            </li>
        );
        });

        return (
            <React.Fragment>
                <h2>Listes des Personnes</h2>
                <ul>
                    {persons}
                </ul>
            </React.Fragment>
        );
    }
}

export default Persons;