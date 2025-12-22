import React, { useEffect, useState } from "react";

const CORRECT_USERNAME = "erisismajli";
const CORRECT_PASS = "eris1234";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [users, setUsers] = useState([]);
  const [usersFetchErr, setUsersFetchErr] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    setLoadingUsers(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setLoadingUsers(false);
        }, 3000);
      })
      .catch((err) => {
        setUsersFetchErr(err.message);
        setLoadingUsers(false);
      });
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setMessage("");
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!userData.username || !userData.password) {
      setMessage("Please provide a valid username and password");
      setMessageColor("orange");
      return;
    }

    if (
      userData.username === CORRECT_USERNAME &&
      userData.password === CORRECT_PASS
    ) {
      setMessage("Login success!");
      setMessageColor("green");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid credentials.");
      setMessageColor("red");
    }
  };

  if (usersFetchErr) return <p>{usersFetchErr}</p>;

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Simple Login</h1>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />

          <br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />

          <br />
          <button onClick={handleSubmit}>Log in</button>
        </div>
      ) : (
        <ul>
          {loadingUsers ? (
            <p>Loading users...</p>
          ) : (
            users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))
          )}
        </ul>
      )}

      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default Login;
