import React from "react";
import "../styles/style.css"


// condition ? result : othervise result

// condition && result 
// if else
const UserInformation = (props) => {
    const femaleGender = "female";
    const maleGender = "male";

    const isPink = true;
    return (
        <>
            <hr />
            <h1 className="first-name">{props.firstName}</h1>
            <h1>{props.lastName}</h1>
            <h1 style={{color: props.age < 35 ? "red" : "black"}}>{props.age}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.createdAt}</h1>
            <h1>{props.role}</h1>
            <h1 className={`${isPink ? "pink-text" : "black-text"}`}>{props.birthYear}</h1>
            <hr />
            {props.age >= 35 ? <h1>Welcome</h1> : <h1>You're too young</h1>}
            {props.gender == femaleGender && <h1>You are a female</h1>}
        </>
    );
};

export default UserInformation;