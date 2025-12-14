import React from "react";
import "./QuizModal.css"; // Assuming you save the CSS above in this file

const QuizModal = ({message, onCancel, onSubmit}) => {
  return (
    <div className="modal-backdrop">
      <div className="submit-modal">
        <h1>{message}</h1>
        <div className="buttons">
          <button onClick={onCancel} className="no">No</button>
          <button onClick={onSubmit} className="yes">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;


// import React from "react";
// import "./QuizModal.css";

// // Modal component receives 3 props:
// // message → the text shown in the modal
// // onCancel → function when clicking "No"
// // onSubmit → function when clicking "Yes"
// const QuizModal = ({ message, onCancel, onSubmit }) => {
//   return (
//     // Dark transparent background behind modal
//     <div className="modal-backdrop">

//       {/* White modal box */}
//       <div className="submit-modal">

//         {/* Modal message text */}
//         <h1>{message}</h1>

//         {/* Buttons container */}
//         <div className="buttons">
//           {/* Clicking NO closes the modal */}
//           <button onClick={onCancel} className="no">
//             No
//           </button>

//           {/* Clicking YES submits the quiz */}
//           <button onClick={onSubmit} className="yes">
//             Yes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizModal;
