import React from 'react';
import Header from '../Header';

const UserTable = (props) => {
    return (
        <div className="container table">
        <Header heading ="View User"/>
      <div className="row">
       <div className="eight columns">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, phone, mail, username} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{mail}</td>
                                <td>{username}</td>
                                <td>
                                    <button className ="delbtn" onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button className ="edtbtn" onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}

export default UserTable;