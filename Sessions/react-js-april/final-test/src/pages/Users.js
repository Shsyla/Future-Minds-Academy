import React, { useEffect, useState } from "react";
import "./users.css";
import Modal from "../components/Modal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [currentGender, setCurrentGender] = useState("male");

  const [editData, setEditData] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const generateRandomGender = (array) =>
    array.map((person) => ({
      ...person,
      gender: Math.random() > 0.5 ? "male" : "female",
    }));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(generateRandomGender(data)));
  }, []);

  const filteredUsers = users.filter(
    (user) => user.gender === currentGender
  );

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const setData = (setter, e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    isEditing ? setData(setEditData, e) : setData(setNewUser, e);
  };

  const addNewUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) {
      alert("Please provide a name and email");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newUser.name,
        email: newUser.email,
        gender: "male",
      },
    ]);

    setNewUser({ name: "", email: "" });
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
    setEditData({ name: "", email: "" });
  };

  return (
    <div className="users-container">
      {isEditing && (
        <Modal
          title="Edit User"
          isEditing
          editData={editData}
          handleChange={handleChange}
          onCancel={() => setIsEditing(false)}
          onSubmit={updateUser}
        />
      )}

      <h1>User Management</h1>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="New user name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="New user email"
          value={newUser.email}
          onChange={handleChange}
        />
        <button onClick={addNewUser}>Add User</button>

        <div className="gender-filters">
          <button onClick={() => setCurrentGender("male")}>Male</button>
          <button onClick={() => setCurrentGender("female")}>Female</button>
        </div>
      </div>

      <ul className="user-list">
        {filteredUsers.map((user) => (
          <div className="user-item" key={user.id}>
            <li>
              {user.name} - {user.email} ({user.gender})
            </li>
            <div className="buttons">
              <button
                className="delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => initEdit(user)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
