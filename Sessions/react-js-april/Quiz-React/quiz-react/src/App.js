import { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2  // index of "Paris"
    },
    {
      question: "What color is the sky?",
      options: ["Green", "Blue", "Red", "Yellow"],
      answer: 1  // index of "Blue"
    },
    {
      question: "How many legs does a spider have?",
      options: ["4", "6", "8", "10"],
      answer: 2  // index of "8"
    }
  ];

  const [userAnswers, setuserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) {
        newScore++;
      }
    });

    setScore(newScore);
  }

  return (
    <div>
      <h2>Simple Quiz</h2>
      {
        questions.map((q, i) => {
          return (<div key={i}>
            <p>{q.question}</p>
            {
              q.options.map((opt, j) => {
                return (
                  <div key={j}>
                    <label>
                      <input type="radio"
                        name={`q${i}`}
                        value={j}
                        onChange={() => {
                          const newAnswers = [...userAnswers];
                          newAnswers[i] = j;
                          setuserAnswers(newAnswers);
                        }}
                      />{opt}
                    </label>
                  </div>
                )
              })
            }
            <br />
          </div>
          )
        })
      }
      {score !== null && (
        <p id="result">You scored {score} out of 3</p>
      )}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default App;
