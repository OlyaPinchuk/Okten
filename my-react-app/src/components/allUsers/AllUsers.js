import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'

class AllUsers extends Component {

//HOMETASK 2

    state = {users: [], chosen: null}


    onSelect = (id) => {
        let {users} = this.state
        let find = users.find(value => value.id === id)
        this.setState({chosen: find})
    }

    render() {

        let {users, chosen} = this.state

        return (
            <div>


                {

                    chosen && <h2> {chosen.id} - {chosen.name} </h2>

                }

                {
                    users.map(user => {
                    return (<UserComponent item = {user} func = {this.onSelect} key = {user.id}  />)

                    })

                }



             </div>

        )
    }

    componentDidMount() {
         this.users = [];
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(usersFromAPI => {
                    this.setState({users: usersFromAPI})
                })
    }



}

export default AllUsers;

