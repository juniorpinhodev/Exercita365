import { UsersContextProvider } from './context/UsersContext.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <UsersContextProvider>
        <h1>Exercita 365</h1>
        <Outlet />
      </UsersContextProvider>
    </>
  )
}

export default App
