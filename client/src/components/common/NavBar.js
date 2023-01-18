import React from 'react'

import { useNavigate, Link } from 'react-router-dom'

// Import authentication
import { userIsAuthenticated } from '../helpers/auth'

const NavBar = () => {

  const navigate = useNavigate()

  // Function to remove token and navigate to login page
  const handleLogout = () => {
    // Remove token from local storage
    window.localStorage.removeItem('natural-beauty')
    // Navigate to login page
    navigate('/login')
  }

  return (
    <header>
      <nav id="nav-bar">
        <div className="nav-left">
          <Link to="/" className="logo">🏔</Link>
        </div>
        <div className="nav-right">
          <Link to="/parks">National Parks</Link>
          {/* Change links displayed depending on if user is logged in or not */}
          {userIsAuthenticated() ?
            <>
              <Link to="/profile" alt="Profile">Profile</Link>
              <Link onClick={handleLogout} to="" alt="Logout">Logout</Link>
            </>
            :
            <>
              <Link to="/register" alt="Register">Register</Link>
              <Link to="/login" alt="Login">Login</Link>
            </>
          }
        </div>
      </nav>
    </header>
  )
}


export default NavBar