import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ask = ({ students }) => {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("")

  const chooseStudent = () => {
    const randomStudent = Math.floor(Math.random() * students.length)
    const randomAnswer = students[randomStudent].firstName
    console.log(randomAnswer)

    setAnswer(randomAnswer)
  }

  return (
    <div>
      <h1>Ask about something</h1>
      <input type="text" placeholder="Ask your question" />
      {" "}
      <button onClick={chooseStudent}>Ask</button>
      {" "}
      <button onClick={() => navigate("/students")}>Students</button>

      <h2>{answer}</h2>
    </div>
  );
};

export default Ask;
