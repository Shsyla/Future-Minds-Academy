// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [windowWidth]);

//   return (
//     <div>
//       <h1>{windowWidth}</h1>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users, setUsers] = useState([])
//   const [error, setError] = useState("")

//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//      .then(res => res.json())
//      .then(data => setUsers(data.users))
//      .catch(err => setError(err))
//   }, [])

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       <ul>
//         {users.map(user => {
//           return <li key={user.id}>{user.firstName} {user.lastName}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from "react";

// const CORRECT_USERNAME = "erisismajli";
// const CORRECT_PASS = "eris1234";

// const App = () => {
//   return (
//     <div>
//       <h1>Simple Login</h1>
//       <label htmlFor="username">Enter username:</label>
//       <input type="text" name="" id="username" placeholder="username" />
//       <br />
//       <label htmlFor="password">Enter password:</label>
//       <input type="password" name="" id="password" placeholder="password" />
//       <br />
//       <button>Log in</button>
//       <p></p>
//     </div>
//   );
// };

// export default App;


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

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <h1>Simple Login</h1>
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
          <button onClick={handleSubmit}>Log in</button>
        </div>
      )}

      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default App;
