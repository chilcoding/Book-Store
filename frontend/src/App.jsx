import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Course/Course'
import Signup from './components/Signup'
import Contact from './Contact/Contact'
import About from './About/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)



  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={authUser ?<Courses /> : <Navigate to="/signup"/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
