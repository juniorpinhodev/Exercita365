import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
        <Navbar />
        <h2 className='logo'>Exercita 365</h2>
        <Outlet />
    </>
  )
}

export default App
