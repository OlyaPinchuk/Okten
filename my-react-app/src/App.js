import React, {Component} from 'react';
import {users} from './database/userDB.js'
import UserComponent from './components/user/UserComponent'
import AllUsers from './components/allUsers/AllUsers'




class App extends Component {

/*
HOMETASK 2
    state = {flag: false}

    test = () => {
        this.setState({flag: !this.state.flag})
        console.log('test', this.state.flag.toString())
    }
   ===============================================================================================
*/






    render () {


        return (
            <div>
 {/*HOMETASK 1
                {
                    users.map((user, index) => {
                        return (<UserComponent item = {user} key = {index} />)
                    })

                }*/}

  {/*HOMETASK 2

                <button onClick = {this.test}> click me </button>*/}

                <AllUsers/>











                {/* <UserComponent/> */}

            </div>

        );
    }
}


export default App;
