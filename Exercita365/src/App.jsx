import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <h1>Exercita 365</h1>
        <Outlet />
    </>
  )
}

export default App
