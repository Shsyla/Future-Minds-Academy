import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Students Questionary</h1>
      <button onClick={() => navigate("/students")}>Students</button>
      {" "}
      <button onClick={() => navigate("/ask")}>Ask</button>
    </div>
  );
};

export default Welcome;
