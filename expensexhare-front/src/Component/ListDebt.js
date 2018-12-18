import React, {Component} from 'react';



class ListDebt extends Component {
    constructor(props){
        super(props);
        this.state = {debts: []}

    }

    componentDidMount(){
        fetch('http://php/expenseshare/public/debt', {
            method: 'GET',
            headers: { 'X-Requested-With': 'XMLHttpRequest'

            }
        })
            .then(response => response.json())
            .then(data => this.setState({debts: data}));
    }

    render() {
        const debts = this.state.debts.map(dbs => <option key={ dbs.id } value={dbs.id}>{dbs.paid }</option>)
        return (
            <div>
                {debts}
            </div>
        );
    }
}

export default ListDebt;