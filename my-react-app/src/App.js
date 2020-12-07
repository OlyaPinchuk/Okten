import React, {Component} from 'react';
import {users} from './database/userDB.js'
import UserComponent from './components/user/UserComponent'



class App extends Component {



    render () {
        return (
            <div>

                {

                    users.map((user, index) => {
                        return (<UserComponent item = {user} key = {index} />)

                    })




                }
                {/* <UserComponent/> */}

            </div>

        );
    }
}


export default App;
