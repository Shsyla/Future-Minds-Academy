import { useState } from "react";
import "./App.css";
import QuizModal from "./QuizModal";

// Array of questions (you can edit / add more)
const questions = [
  {
    question:
      'The passage says: "Tom enjoys reading every evening." What does Tom enjoy?',
    options: ["Cooking dinner", "Reading", "Playing football", "Watching TV"],
    answerIndex: 1,
  },
  {
    question:
      'The text states: "The library closes at 6 PM." When does the library close?',
    options: ["At 5 PM", "At 6 PM", "At 7 PM", "At 8 PM"],
    answerIndex: 1,
  },
  {
    question:
      'The sentence reads: "Sara walks to school every morning." How does Sara get to school?',
    options: [
      "She drives a car",
      "She takes the bus",
      "She walks",
      "She rides a bike",
    ],
    answerIndex: 2,
  },
  {
    question:
      'The short note says: "Please bring your notebook tomorrow." What should you bring?',
    options: ["Your phone", "Your notebook", "Your lunch", "Your laptop"],
    answerIndex: 1,
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    questions.map(() => ({
      clickedIndex: null,
    }))
  );

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false)

  let clickedIndex = answeredQuestions[currentQuestionIndex].clickedIndex;

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.answerIndex;
  const isCorrect = clickedIndex === correctAnswerIndex;
  const notLastQuestion = currentQuestionIndex < questions.length - 1;

  const goToNext = () => {
    if (!notLastQuestion) {
      setShowModal(true)
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const goToPrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  
  const handleAnswer = (index) => {
    if (clickedIndex != null) return;
    
    if (index === correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
    
    setAnsweredQuestions((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex].clickedIndex = index;
      
      return updated;
    });
  };
  
  const customClass = (index) => {
    let finalClassName = "option-btn ";
    
    if (clickedIndex != null) {
      if (index === correctAnswerIndex) {
        finalClassName = finalClassName + "correct";
      } else if (index === clickedIndex && !isCorrect) {
        finalClassName = finalClassName + "incorrect";
      }
    }
    
    return finalClassName;
  };
  
  const restart = () => {
    setScore(0);
    setSubmitted(false);
    setAnsweredQuestions(
      answeredQuestions.map(() => ({
        clickedIndex: null,
      }))
    );
    setCurrentQuestionIndex(0);
  };
  
  const modalTitle = "Are you sure you want to submit this quiz?"
  
  const handleSubmittion = () => {
    setShowModal(false)
    setSubmitted(true);
  }

  return (
    <>
      {showModal && <QuizModal message={modalTitle} onCancel={() => setShowModal(false)} onSubmit={handleSubmittion}/>}
      {!submitted ? (
        <div className="quiz-container">
          <h1>Simple Reading Quiz</h1>
          <div id="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <div id="question-text">
            {questions[currentQuestionIndex].question}
          </div>
          <ul id="options-list">
            {questions[currentQuestionIndex].options.map((opsion, index) => {
              return (
                <li key={index}>
                  {" "}
                  <button
                    onClick={() => handleAnswer(index)}
                    className={customClass(index)}
                  >
                    {opsion}
                  </button>{" "}
                </li>
              );
            })}
          </ul>
          <div id="feedback" className="">
            <p
              style={{ color: isCorrect ? "green" : "red", fontWeight: "600" }}
            >
              {clickedIndex == null
                ? ""
                : isCorrect
                ? "✅ Correct answer!"
                : "❌ Wrong answer"}
            </p>

            <p>Score: {score}</p>
          </div>
          <div className="nav-buttons">
            <button
              id="prev-btn"
              disabled={currentQuestionIndex === 0}
              onClick={goToPrev}
            >
              Previous
            </button>
            <button
              id="next-btn"
              disabled={currentQuestionIndex === questions.length}
              onClick={goToNext}
              style={{ backgroundColor: !notLastQuestion && "green" }}
            >
              {notLastQuestion ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <div id="quiz-result">
          <h1 id="result-title">Quiz submitted</h1>
          <h3 id="result-score">
            You scored {score} out of {questions.length}
          </h3>
          <button id="restart-btn" onClick={restart}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}

export default Quiz;

// import { useState } from "react";
// import "./App.css";
// import QuizModal from "./QuizModal";

// // Array of quiz questions
// const questions = [
//   {
//     question:
//       'The passage says: "Tom enjoys reading every evening." What does Tom enjoy?',
//     options: ["Cooking dinner", "Reading", "Playing football", "Watching TV"],
//     answerIndex: 1,
//   },
//   {
//     question:
//       'The text states: "The library closes at 6 PM." When does the library close?',
//     options: ["At 5 PM", "At 6 PM", "At 7 PM", "At 8 PM"],
//     answerIndex: 1,
//   },
//   {
//     question:
//       'The sentence reads: "Sara walks to school every morning." How does Sara get to school?',
//     options: [
//       "She drives a car",
//       "She takes the bus",
//       "She walks",
//       "She rides a bike",
//     ],
//     answerIndex: 2,
//   },
//   {
//     question:
//       'The short note says: "Please bring your notebook tomorrow." What should you bring?',
//     options: ["Your phone", "Your notebook", "Your lunch", "Your laptop"],
//     answerIndex: 1,
//   },
// ];

// function Quiz() {
//   // Tracks which question the user is currently viewing
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // Stores user answers for all questions
//   // Each question starts with clickedIndex = null (not answered yet)
//   const [answeredQuestions, setAnsweredQuestions] = useState(
//     questions.map(() => ({
//       clickedIndex: null, // user hasn’t selected anything yet
//     }))
//   );

//   // Tracks score
//   const [score, setScore] = useState(0);

//   // Shows final score after quiz is submitted
//   const [submitted, setSubmitted] = useState(false);

//   // Controls modal visibility
//   const [showModal, setShowModal] = useState(false);

//   // Gets the selected answer for current question (null if not selected)
//   let clickedIndex = answeredQuestions[currentQuestionIndex].clickedIndex;

//   // Convenience variables
//   const currentQuestion = questions[currentQuestionIndex];
//   const correctAnswerIndex = currentQuestion.answerIndex;

//   // Check if the selected answer is correct
//   const isCorrect = clickedIndex === correctAnswerIndex;

//   // Check if we are NOT on the last question
//   const notLastQuestion = currentQuestionIndex < questions.length - 1;

//   // Go to next question OR show modal on last question
//   const goToNext = () => {
//     // If it's the final question…
//     if (!notLastQuestion) {
//       // …open modal instead of moving forward
//       setShowModal(true);
//       return; // Stop function
//     }

//     // If not final question → move to next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   // Go to previous question
//   const goToPrev = () => {
//     // Reduces question index by 1
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//   };

//   // Handles clicking an answer button
//   const handleAnswer = (index) => {
//     // If user already clicked an answer → prevent changing it
//     if (clickedIndex != null) return;

//     // If clicked answer is correct → increment score
//     if (index === correctAnswerIndex) {
//       setScore((prev) => prev + 1); // increase score by 1
//     }

//     // Save clicked answer into answeredQuestions array
//     setAnsweredQuestions((prev) => {
//       const updated = [...prev]; // copy state
//       updated[currentQuestionIndex].clickedIndex = index; // store user choice
//       return updated; // return new array to update state
//     });
//   };

//   // Applies CSS class to show green/red buttons
//   const customClass = (index) => {
//     let finalClassName = "option-btn ";

//     // If the user already selected an answer
//     if (clickedIndex != null) {
//       // If this button is the correct answer
//       if (index === correctAnswerIndex) {
//         finalClassName += "correct"; // add green style
//       }
//       // If this button is the one the user clicked but it is wrong
//       else if (index === clickedIndex && !isCorrect) {
//         finalClassName += "incorrect"; // add red style
//       }
//     }

//     return finalClassName; // return final button style
//   };

//   // Restart the entire quiz
//   const restart = () => {
//     setScore(0); // reset score
//     setSubmitted(false); // go back to quiz mode

//     // Reset answers for all questions
//     setAnsweredQuestions(
//       answeredQuestions.map(() => ({
//         clickedIndex: null, // no answers selected anymore
//       }))
//     );

//     setCurrentQuestionIndex(0); // go back to first question
//   };

//   // Text to show inside modal
//   const modalTitle = "Are you sure you want to submit this quiz?";

//   // Runs when user clicks "YES" in modal
//   const handleSubmittion = () => {
//     setShowModal(false); // close modal
//     setSubmitted(true); // show results page
//   };

//   return (
//     <>
//       {/* Render modal only if showModal = true */}
//       {showModal && (
//         <QuizModal
//           message={modalTitle}
//           onCancel={() => setShowModal(false)} // close modal on NO
//           onSubmit={handleSubmittion} // submit quiz on YES
//         />
//       )}

//       {/* If quiz is NOT submitted yet → show quiz UI */}
//       {!submitted ? (
//         <div className="quiz-container">
//           <h1>Simple Reading Quiz</h1>

//           {/* Show question number */}
//           <div id="question-counter">
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </div>

//           {/* Show question text */}
//           <div id="question-text">{currentQuestion.question}</div>

//           {/* Answer options list */}
//           <ul id="options-list">
//             {currentQuestion.options.map((option, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => handleAnswer(index)} // handle answer
//                   className={customClass(index)} // apply green/red styles
//                 >
//                   {option}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Feedback: "Correct" or "Wrong" */}
//           <div id="feedback">
//             <p
//               style={{
//                 color: isCorrect ? "green" : "red",
//                 fontWeight: "600",
//               }}
//             >
//               {clickedIndex == null
//                 ? "" // show nothing until user clicks
//                 : isCorrect
//                 ? "✅ Correct answer!"
//                 : "❌ Wrong answer"}
//             </p>

//             {/* Live score display */}
//             <p>Score: {score}</p>
//           </div>

//           {/* Navigation buttons */}
//           <div className="nav-buttons">
//             {/* Previous button */}
//             <button
//               id="prev-btn"
//               disabled={currentQuestionIndex === 0} // disable on first question
//               onClick={goToPrev}
//             >
//               Previous
//             </button>

//             {/* Next or Submit button */}
//             <button
//               id="next-btn"
//               disabled={currentQuestionIndex === questions.length}
//               onClick={goToNext}
//               style={{ backgroundColor: !notLastQuestion && "green" }} // makes submit button green
//             >
//               {notLastQuestion ? "Next" : "Submit"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         // AFTER SUBMISSION: results screen
//         <div id="quiz-result">
//           <h1 id="result-title">Quiz submitted</h1>
//           <h3 id="result-score">
//             You scored {score} out of {questions.length}
//           </h3>

//           {/* Restart entire quiz */}
//           <button id="restart-btn" onClick={restart}>
//             Restart
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default Quiz;
