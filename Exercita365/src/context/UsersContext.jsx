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
    .catch(()=> alert('Erro ao cadastrar o usuário'))
  }


  function editUsers(dataUsers, id){
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUsers)
    })
    .then(()=> {
      alert('Usuário editado com sucesso')
      readUsers()
    })
    .catch(()=> alert('Erro ao editar o usuário'))
  }


  function removeUsers(id){
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',

    })
    .then(()=> {
      alert('Usuário removido com sucesso')
      readUsers()
    })
    .catch(()=> alert('Erro ao remover o usuário'))
  }

  return(
    <UsersContext.Provider value={{users, registerUsers, editUsers, removeUsers}}>
      {children}
    </UsersContext.Provider>
  )
}