import React, { useEffect, useState } from "react";
import "./Users.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) {
      alert("Please provide name and email");
      return;
    }

    const userToAdd = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
    };

    setUsers((prev) => [...prev, userToAdd]);
    setNewUser({ name: "", email: "" });
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const initEdit = (user) => {
    setIsEditing(true);
    setEditingId(user.id);
    setEditData({ name: user.name, email: user.email });
  };

  const updateUser = () => {
    if (!editData.name.trim() || !editData.email.trim()) {
      alert("Please fill all fields");
      return;
    }

    setUsers((prev) =>
      prev.map((user) =>
        user.id === editingId
          ? { ...user, name: editData.name, email: editData.email }
          : user
      )
    );

    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="users-container">
      <h1>User Management</h1>

      {/* Add User */}
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="New user name"
          value={newUser.name}
          onChange={(e) => handleChange(e, setNewUser)}
        />
        <input
          type="text"
          name="email"
          placeholder="New user email"
          value={newUser.email}
          onChange={(e) => handleChange(e, setNewUser)}
        />
        <button onClick={addNewUser}>Add User</button>
      </div>

      {/* Edit User */}
      {isEditing && (
        <div className="form">
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={(e) => handleChange(e, setEditData)}
          />
          <input
            type="text"
            name="email"
            value={editData.email}
            onChange={(e) => handleChange(e, setEditData)}
          />
          <button onClick={updateUser}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}

      {/* User List */}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} - {user.email}
            <div className="buttons">
              <button className="edit-btn" onClick={() => initEdit(user)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

