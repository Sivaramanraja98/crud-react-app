import React, {useState} from 'react';
import Header from '../Header';
import { Link, useNavigate } from 'react-router-dom';


const EditUserForm = (props) => {
   let  history = useNavigate();

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
        history('/user')        
    }
   
    return (
        <div className="container eduser">
        <Header heading =" Edit User"/>
        <div className="row">
        <div className="six columns">
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Phone</label>
            <input className="u-full-width" type="text" value={user.phone} name="phone" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="email" value={user.mail} name="mail" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />     
            <button className="button-primary" type="submit" onClick={handleSubmit} >Update user</button>
                <Link to ="/user">
                    <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
                </Link>
        </form>
        </div>
        </div>
        </div>
    )
}

export default EditUserForm;