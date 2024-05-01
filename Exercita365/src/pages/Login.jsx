
function Login (){
  return(
      <div className="container">
          <h1>Faça o seu Login para acessar</h1>


          <input type="email" 
                 placeholder="Digite o seu email"
          />

          <input type="password"
                 placeholder="Digite a sua senha"
          />
                  
          <button onClick={()=> doLogin}>Acessar</button>
      </div>
  ) 
}

export default Login