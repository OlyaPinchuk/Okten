import React, {Component} from 'react';
//import './User.css'





class UserComponent extends Component {


    render () {

/*HOMETASK 1

        let {item} = this.props
        console.log(item)*/

        let {item} = this.props

        return (
            <div>

{/*HOMETASK 1*/}
                {/*<div> {item.name} - {item.age} - {item.status.toString()} </div>*/}

                {item.name} - {item.id}

                <button>chose</button>


            </div>

        );
    }
}


export default UserComponent;
