import React, { useEffect, useState } from "react";

const CORRECT_USERNAME = "erisismajli";
const CORRECT_PASS = "eris1234";

const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messageColor, setMessageColor] = useState("black");
  const [users, setUsers] = useState([]);
  const [usersFetchErr, setUsersFetchErr] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setLoadingUsers(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setUsers(data);
            setLoadingUsers(false);
          }, 3000);
        })
        .catch((error) => setUsersFetchErr(error.message));
    }
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
    if (userData.username === "" || userData.password === "") {
      setMessage("Please provide a valid username and password");
      setMessageColor("orange");
      return;
    }

    if (
      userData.username === CORRECT_USERNAME &&
      userData.password === CORRECT_PASS
    ) {
      setMessage("Login success!");
      setIsLoggedIn(true);
      setMessageColor("green");
    } else {
      setMessage("Invalid credentials.");
      setMessageColor("red");
    }
  };

  if (usersFetchErr) return <p>{usersFetchErr}</p>  

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1 className="login-title">Simple Login</h1>
          <label htmlFor="username">Enter username:</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <br />
          <label htmlFor="password">Enter password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <br />
          <button onClick={() => navigate("/login")}>Log in</button>
        </div>
      ) : (
        <div>
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
        </div>
      )}

      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default App;
