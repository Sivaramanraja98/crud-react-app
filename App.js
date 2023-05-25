import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import { Route, Routes} from "react-router-dom";
import "./App.css"

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <Routes>
     
    
      <Route exact path="/" element={
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />}/>

    <Route exact path="/edit" element={
      <EditUserForm
        editing ={editing}
        currentUser={currentUser}
        setEditing={setEditing}
        updateUser={updateUser}/>
      }/>

    <Route exact path="/add" element={
    <AddUserForm addUser={addUser} /> }/>
    </Routes>
  );
};

export default App;