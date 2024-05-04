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

  async function login(email, senha){
    try {
   
      const res = await fetch("http://localhost:3000/users")
      const data = await res.json()

      let existUser = false

      data.map(user => {
    
        if(user.email == email){
          existUser = true
          if(user.senha == senha){
            localStorage.setItem("isAuthenticated", true)
            localStorage.setItem('userId', user.id);
            window.location.href = "/"
            return
          }

          alert("Senha incorreta!")
          return
        }

      })

      if(!existUser){
        alert("Não existe um usuário com esse email!")
      }

    } catch {

    }
  }


  //POST cadastrar
  function registerUsers(users){
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    })
    .then(()=> {
      alert('Usuário cadastrado com sucesso')
      readUsers()
    })
    .catch(()=> alert('Erro ao cadastrar o usuário'))
  }

  //PUT editar
  function editUsers(dataUsers){
    fetch(`http://localhost:3000/users/${dataUsers.id}`, {
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
  async function removeUsers(id){
    try {
      const result = await fetch(`http://localhost:3000/list?userId=${id}`)
      const data = await result.json()
      if (data.length > 0) {
        alert('O usuário não pode ser removido pois existem locais de exercícios vinculados a ele.')
        return
      }
  
      await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      })
      alert('Usuário removido com sucesso')
      readUsers()
    } catch {
      alert('Erro ao remover o usuário')
    }
  }
  

  function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  }

  return(
    <UsersContext.Provider value={{users, readUsersId, login, logout, registerUsers, editUsers, removeUsers}}>
      {children}
    </UsersContext.Provider>
  );
}; 


export default UsersContextProvider;