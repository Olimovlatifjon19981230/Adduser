import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div>
                
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Age' />
                    <input type="text" placeholder='Email' />
                </form>
                <button>Add User</button>
            </div>
        );
    }
}

export default AddUser;
