import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
        <Navbar />
        <h1>Exercita 365</h1>
        <Outlet />
    </>
  )
}

export default App
