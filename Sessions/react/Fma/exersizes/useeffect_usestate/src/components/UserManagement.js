import React, { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => setError(error));
  }, []);

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

  const addUser = () => {
    const userToAdd = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
    };
    setUsers((prev) => [...prev, userToAdd]);
  };

  const initEdit = (id) => {
    const userBeingEdited = users.find((user) => user.id === id);
    setNewUser((prev) => ({
      ...prev,
      name: userBeingEdited.name,
      email: userBeingEdited.email,
    }));
    setIsEditing(!isEditing);
    setEditingId(id);
  };

  const applyChanges = (id) => {
    if (newUser.name.trim() === "" || newUser.email.trim() === "") {
        alert("Please provide a name and email")
        return
    }
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers)
    setNewUser({
        name: "",
        email: ""
    })
    setIsEditing(false)
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="email"
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>
              {user.name} - {user.email}
            </li>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => initEdit(user.id)}>{isEditing ? "Cancel Edit" : "Edit"}</button>
            {isEditing && editingId === user.id && (
              <div>1
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="name"
                  value={newUser.name}
                />{" "}
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="email"
                  value={newUser.email}
                />
                <button onClick={() => applyChanges(user.id)}>
                  Apply changes
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
