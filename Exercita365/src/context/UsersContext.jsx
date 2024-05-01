import { createContext, useEffect, useState } from "react";
export const UsersContext = createContext()

export const UsersContextProvider = ({children}) => {

  const [users, setUsers] = useState([])



  async function login(email, password){
    try {
      const res = await fetch("http://localhost:3000/users")
      const datas = await res.json()

      let userExists= false

      datas.map(user => {
        if(user.email == email){
          userExists = true
          if(user.password == password){
            localStorage.setItem("isAuthenticated", true)
            window.location.href = "/"
            return
          }

          alert("A senha está incorreta.")
          return
        }
      })

      if(!userExists){
        alert("Email de usuário não cadastrado")
      }

    } catch {

    }
  }

  return (
    <UsersContext.Provider value={{login}}>
      {children}
    </UsersContext.Provider>
  )
}
