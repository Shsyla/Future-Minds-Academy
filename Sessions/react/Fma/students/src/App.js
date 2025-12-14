import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from './pages/Welcome';
import Students from './pages/Students';
import Ask from './pages/Ask';

const App = () => {
  const [students, setStudents] = useState([])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/students' element={<Students students={students} setStudents={setStudents} />} />
        <Route path='/ask' element={<Ask students={students} />} />
      </Routes>
    </Router>
  )
}

export default App