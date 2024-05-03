import { useState, useContext} from 'react';
import { UsersContext } from '../context/UsersContext'
import { Link } from 'react-router-dom';


function Login() {

  const { login } = useContext(UsersContext)

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  async function doLogin(){
    await login(user.email, user.password)
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
             value={user.password}
             onChange={(e)=> setUser({...user, password: e.target.value})}
      />
             <button onClick={doLogin}>Acessar</button>
             <Link to='/users/registration'>Cadastre-se aqui</Link>
    </div>
  )
}

export default Login
