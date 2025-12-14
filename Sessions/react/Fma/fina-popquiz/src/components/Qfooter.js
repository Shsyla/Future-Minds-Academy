import { NavLink } from 'react-router-dom';
export default function Qfooter(props){
    return(
        <>
            <div className="footer">
                <div className="question-status">Question {props.page} of 5</div>
                {props.notone && <NavLink to="/" className="next-btn">Prev </NavLink> }
                <NavLink to="/q2" className="next-btn">Next</NavLink>
            </div>
        </>
    );
}

// import { NavLink } from "react-router-dom";

// export default function Qfooter({ page }) {
//   const num = Number(page);
//   const total = 5;

//   return (
//     <div className="footer">
//       <div className="question-status">Question {num} of {total}</div>

//       {num > 1 && (
//         <NavLink to={num === 2 ? "/" : `/q${num - 1}`} className="next-btn">
//           Prev
//         </NavLink>
//       )}

//       {num < total ? (
//         <NavLink to={`/q${num + 1}`} className="next-btn">
//           Next
//         </NavLink>
//       ) : (
//         <span className="next-btn disabled">Finish</span>
//       )}
//     </div>
//   );
// }
