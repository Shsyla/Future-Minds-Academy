import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
   </Router>
  )
}

export default App

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const LogIn = () => {

//     const navigate = useNavigate();

//     return (
//         <div>
//             Login
//             <br />
//             <Link to={"/"}>Go to Dashboard</Link>
//             <button onClick={() => navigate("/")}>Go to Dashboard</button>
//         </div>
//     )
// };

// export default LogIn;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const navigate = useNavigate();
//   return (
//     <div>
//       Dashboard
//       <button onClick={() => navigate("/login")}>Go to LogIn</button>
//     </div>
//   )
// }

// export default Dashboard
