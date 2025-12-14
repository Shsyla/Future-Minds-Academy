import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Students = ({ students, setStudents }) => {
    const navigate = useNavigate();
    const [newStudent, setNewStudent] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setNewStudent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const addStudent = () => {
        if (newStudent.firstName.trim() === "" || newStudent.lastName.trim() === "") {
            alert("Please provide a valid first name and last name")
        }
        setStudents(prev => [
            ...prev, newStudent
        ])
    }

    return (
        <div>
            <h1>Students</h1>
            <input onChange={handleChange} type="text" placeholder="First Name" name="firstName" />
            {" "}
            <input onChange={handleChange} type="text" placeholder="Last Name" name="lastName" />
            {" "}
            <button onClick={addStudent}>Add Student</button>
            {" "}
            <button onClick={() => navigate("/ask")}>Go ask a question</button>
            <div>
                <ul>
                    {students.map(student => (
                        <li>{student.firstName} {student.lastName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Students;
