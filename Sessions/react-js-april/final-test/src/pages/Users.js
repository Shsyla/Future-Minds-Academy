import React, { useEffect, useState } from "react";
import "./users.css";
import Modal from "../components/Modal";

// https://jsonplaceholder.typicode.com/users

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  const [currentGender, setCurrentGender] = useState("male");

  const generateRandomGender = (array) => {
    const randomNumber = Math.floor(Math.random() * 2) + 1;

    const updated = array.map((person) => ({
      ...person,
      gender: Math.random() > 0.5 ? "male" : "female",
    }));

    return updated;
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        data = generateRandomGender(data);
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((user) => user.gender === currentGender);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewUser = () => {
    if (newUser.name.trim() === "" || newUser.email.trim() === "") {
      alert("Please provide a name and email");
      return;
    }

    const userToAdd = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
    };

    setUsers((prev) => [...prev, userToAdd]);
  };

  return (
    <div className="users-container">
      <h1>User Management</h1>

      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="New user name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="New user email"
        />
        <button onClick={addNewUser}>Add User</button>

        <div className="gender-filters">
          <button onClick={() => setCurrentGender("male")}>Male</button>
          <button onClick={() => setCurrentGender("female")}>Female</button>
        </div>
      </div> 

      <ul className="user-list">
        {filteredUsers.map((user) => {
          return (
            <div className="user-item" key={user.id}>
              <li>
                {user.name} - {user.email} ({user.gender})
              </li>
              <div className="buttons">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;