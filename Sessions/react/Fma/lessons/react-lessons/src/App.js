import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Users from './pages/Users'
import Login from './pages/Login'
import Default from './pages/Default'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Default />}/>
        <Route path="/users" element={<Users />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App;
