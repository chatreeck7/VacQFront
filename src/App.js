import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BasicWeb } from './screens/BasicWeb.tsx'
import { Header } from './components/Header.tsx'
import { Home } from './screens/Home.tsx'
import { Login } from './screens/Login.tsx'
import { Register } from './screens/Register.tsx'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/basicWeb" element={<BasicWeb />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
