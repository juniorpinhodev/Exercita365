import React, { useContext} from 'react';
import { UsersContext } from './context/UsersContext'


function Login() {

  const { users } = useContext(UsersContext)


    return (
    <div>
       
      {!!users && users.map(user => (
        <>
        <h3 key={user.id}>{user.nome}</h3>
        </>
      ))}

      <input type='text' 
             placeholder='Digiter o nome do usuário'
             value={newUsers.nome}
             onChange={(e)=> setNewUsers({...newUsers, nome: e.target.value})}
      />

      <input type='email' 
             placeholder='Digiter o email'
             value={newUsers.email}
             onChange={(e)=> setNewUsers({...newUsers, email: e.target.value})}
      />
      <input type='password' 
             placeholder='Digiter a senha'
             value={newUsers.senha}
             onChange={(e)=> setNewUsers({...newUsers, senha: e.target.value})}
      />
             <button onClick={()=> registerUsers(newUsers)}>Acessar</button>
    </div>
  )
}

export default Login
