import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  )
}