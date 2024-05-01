import { useState, useEffect, createContext } from 'react';

export const UsersContext = createContext()

export const UsersContextProvider = ({children})=> {
  const [ users, setUsers ]= useState([])

  useEffect(()=> {
    readUsers()
  },[])

  //GET consultar
  function readUsers(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  }

  //validar se usuario está cadastrado - conferir se existe
  async function searchUser(email, senha){ 
    try{
      let usersList = await fetch('http://localhost:3000/users')

      let existUser = false

      usersList.map(user=> {
        if(user.email == email){
          existUser = true
        }
      })
    } catch {
      //completar finalizar
    }
  }

  //GET por ID
  async function readUsersId(id){
    try {
      let result = await fetch(`http://localhost:3000/users/${id}`)
      return result.json()
    } catch {

    }
  }

  //POST cadastrar
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

  //PUT editar
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

  //DELETE
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
    <UsersContext.Provider value={{users, readUsersId, registerUsers, editUsers, removeUsers}}>
      {children}
    </UsersContext.Provider>
  )
}