import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'

class AllUsers extends Component {

//HOMETASK 2

    state = {users: [],
//    chosen: null
    }


    render() {

        let {users} = this.state

        return (
            <div>

                {
                users.map(user => {
                    return (<UserComponent item = {user} key = {user.id} />)

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

            console.log(this.state)
    }



}

export default AllUsers;

