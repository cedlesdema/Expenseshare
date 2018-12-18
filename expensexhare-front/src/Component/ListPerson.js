import React, {Component} from 'react';



class ListPerson extends Component {
    constructor(props){
        super(props);
        this.state = {persons: []}

    }

    componentDidMount(){
        fetch('http://php/expenseshare/public/person', {
            method: 'GET',
            headers: { 'X-Requested-With': 'XMLHttpRequest'

            }
        })
            .then(response => response.json())
            .then(data => this.setState({persons: data}));
    }

    render() {
        const persons = this.state.persons.map(pers => <option key={ pers.id } value={pers.id}>{pers.firstname + ' ' + pers.lastname}</option>)
        return (
            <div>
                {persons}
            </div>
        );
    }
}

export default ListPerson;