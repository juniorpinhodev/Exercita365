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
        <h1>Exercita 365</h1>
        <h2>Faça o seu Login</h2>
      <input type='email' 
             placeholder='Digiter o email'
             value={user.email}
             onChange={(e)=> setUser({...user, email: e.target.value})}
      /> &nbsp;
      <input type='password' 
             placeholder='Digiter a senha'
             value={user.password}
             onChange={(e)=> setUser({...user, password: e.target.value})}
      /> <br/> <br />
             <button onClick={doLogin}>Acessar</button> <br />
             <Link to='/users/registration'>Cadastre-se aqui</Link>
    </div>
  )
}

export default Login
