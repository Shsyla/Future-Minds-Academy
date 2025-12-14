import React, { useState } from "react";

const validEmail = "info@futureminds.io";
const validPassword = "Fma#2025";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="login" id="loginscreen">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <>
          <div id="app-screen">
            <h2>TODO List</h2>
            <input id="new-task" type="text" placeholder="Add a new task" />
            <select id="date-select">
              <option value="today">Today</option> npm -v
              <option value="yesterday">Yesterday</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
            <button>Add</button>
            <div className="filters">
              <button>All</button>
              <button>Yesterday</button>
              <button>Today</button>
              <button>Tomorrow</button>
            </div>
            <ul id="todo-list"></ul>
          </div>

          <footer>
            &copy; Future Minds Academy 2025. All Rights Reserved!
          </footer>
        </>
      )}
    </div>
  );
}

export default App;