import React, {Component} from 'react';
import './User.css'





class UserComponent extends Component {


    render () {

        let {item} = this.props
        console.log(item)

        return (
            <div>
                <div> {item.name} - {item.age} - {item.status.toString()} </div>

{/*             <div>Hi</div> */}
            </div>

        );
    }
}


export default UserComponent;
