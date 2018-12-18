import React, {Component} from 'react';



class ListGroupFilter extends Component {
    constructor(props){
        super(props);
        this.state = {sharegroup: []}

    }

    componentDidMount(){
        fetch('http://php/expenseshare/public/sharegroup', {
        method: 'GET',
        headers: { 'X-Requested-With': 'XMLHttpRequest'

                    }
                })
                .then(response => response.json())
                .then(data => this.setState({sharegroup: data}));
    }

    render() {
        const sharegroup = this.state.sharegroup.map(shg => <option key={ shg.id } value={shg.id}>{shg.slug}</option>)
        return (
         <div>
             {sharegroup}
         </div>
        );
    }
}

export default ListGroupFilter;