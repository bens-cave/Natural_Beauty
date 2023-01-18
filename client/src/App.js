import React, { useEffect } from 'react'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './Home'
import ParksIndex from './components/parks/ParksIndex'
import NationalPark from './components/parks/Park'
import NavBar from './components/common/NavBar'
import ProfilePage from './ProfilePage'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/parks/') // * <-- replace with your endpoint
    }
    getData()
  })

  return (
    <main id="main-wrapper">
      {/* Components with link components */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Auth routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* User */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* Parks pages */}
          <Route path="/parks" element={<ParksIndex />} />
          <Route path="/parks/:id" element={<NationalPark />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
