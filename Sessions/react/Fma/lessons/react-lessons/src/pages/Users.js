import React, { useEffect, useState, useTransition } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  const addUser = () => {
    const userToAdd = {
      id: Date.now(),
      name: newUser,
    };

    setUsers((prev) => [...prev, userToAdd]);
  };

  const initEdit = (id) => {
    const userBeingEdited = users.find((user) => user.id === id);
    setIsEditing(!isEditing);
    setEditingId(id);

    setNewUser(userBeingEdited.name);
  };

  const applyChanges = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name: newUser } : user
    );

    setUsers(updatedUsers);
    setIsEditing(false)
    setEditingId(null)
  };

  return (
    <div>
      <h1>Users</h1>

      <input onChange={handleChange} type="text" placeholder="New User" />
      <button onClick={addUser}>Add user</button>

      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => initEdit(user.id)}>Edit</button>
            {isEditing && editingId === user.id && (
              <div>
                <input onChange={handleChange} type="text" value={newUser} />
                <button onClick={() => applyChanges(user.id)}>Apply changes</button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
