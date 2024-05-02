import { useState, useContext} from 'react';
import { UsersContext } from '../context/UsersContext'


function Login() {

  const { login } = useContext(UsersContext)

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  async function doLogin(){
    await login(user.email, user.senha)
  }

    return (
    <div>
       
      <input type='email' 
             placeholder='Digiter o email'
             value={user.email}
             onChange={(e)=> setUser({...user, email: e.target.value})}
      />
      <input type='password' 
             placeholder='Digiter a senha'
             value={user.senha}
             onChange={(e)=> setUser({...user, senha: e.target.value})}
      />
             <button onClick={()=> doLogin(user)}>Acessar</button>
    </div>
  )
}

export default Login
