import { useState, useEffect, createContext } from 'react';

export const UsersContext = createContext()

export const UsersContextProvider = ({children})=> {
  const [ users, setUsers ]= useState([])

  useEffect(()=> {
    readUsers()
  },[])

  function readUsers(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  }


  function registerUsers(newUsers){
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUsers)
    })
    .then(()=> {
      alert('Usuário cadastrado com sucesso')
      readUsers()
    })
    .catch(()=> alert('Erro ao adicionar o usuário'))
  }

  return(
    <UsersContext.Provider value={{users, registerUsers}}>
      {children}
    </UsersContext.Provider>
  )
}