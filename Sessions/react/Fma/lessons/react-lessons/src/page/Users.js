import React, { useEffect, useState } from 'react';
import "./Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const [editingUsername, setEditingUsername] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isEditing) {
            setEditingUsername(value);
        } else {
            setNewUser(prev => ({ ...prev, [name]: value }));
        }
    };

    const addUser = () => {
        if (!newUser.name.trim() || !newUser.email.trim()) {
            alert("Please provide a name and email");
            return;
        }
        const userToAdd = { id: Date.now(), ...newUser };
        setUsers(prev => [...prev, userToAdd]);
        setNewUser({ name: "", email: "" });
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id)); // fix: remove user
    };

    const initEdit = (id) => {
        const userBeingEdited = users.find(user => user.id === id);
        setIsEditing(true);
        setEditingId(id);
        setEditingUsername(userBeingEdited.name);
    };

    const applyChanges = () => {
        setUsers(users.map(user =>
            user.id === editingId ? { ...user, name: editingUsername } : user
        ));
        setIsEditing(false);
        setEditingId(null);
        setEditingUsername("");
    };

    return (
        <div>
            <input
                onChange={handleChange}
                name='name'
                type='text'
                placeholder='New User Name'
                value={newUser.name} // fixed
            />
            <input
                onChange={handleChange}
                name='email'
                type='text'
                placeholder='New User Email'
                value={newUser.email}
            />
            <button onClick={addUser}>Add User</button>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {isEditing && editingId === user.id ? (
                            <>
                                <input
                                    type='text'
                                    placeholder='Edit Name'
                                    value={editingUsername}
                                    onChange={handleChange}
                                />
                                <button onClick={applyChanges}>Apply Changes</button>
                            </>
                        ) : (
                            <p>{user.name} - {user.email}</p>
                        )}
                        <button onClick={() => deleteUser(user.id)}>Delete User</button>
                        {!isEditing && <button onClick={() => initEdit(user.id)}>Edit</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
