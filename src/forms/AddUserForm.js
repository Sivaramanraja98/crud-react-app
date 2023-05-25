import React, {useState} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.phone && user.mail && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <div className="container aduser">
        <Header heading =" Add User"/>
        <div className="row">
        <div className="six columns center">
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Phone</label>
            <input className="u-full-width" type="text" value={user.phone} name="phone" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="email" value={user.mail} name="mail" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <Link to = "/">
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
            </Link>
        </form>
        </div>
        </div>
        </div>
        
    )
}

export default AddUserForm;