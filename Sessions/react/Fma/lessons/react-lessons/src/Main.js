import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Default from './page/Default';
import Login from './page/Login';
import Users from './page/Users';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Router>
  )
}

export default Main;
