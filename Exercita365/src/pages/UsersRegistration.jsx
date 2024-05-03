import { UsersContext } from '../context/UsersContext'
import React, { useContext, useState } from 'react';



function UsersRegistration(){

  const { users, registerUsers, removeUsers } = useContext(UsersContext)
  const [newUsers, setNewUsers] = useState({
    nome: '',
    email: '',
    senha: '',
    sexo: '',
    cpf: '',
    data_nascimento: '',
    endereco: {
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  });

return(
    <>
      <h1>Usuários Cadastrados</h1>
      <p>Abaixo, segue a lista de usuários que estão cadastrados em nossa plataforma.</p>

      {!!users &&
        users.map((user) => (
          <>
            <h3 key={user.id}>{user.nome}</h3>
            <button onClick={() => removeUsers(user.id)}>Deletar</button>
          </>
        ))}

        <br/>

        <h1>Cadastre-se!</h1>
        <p>Seja um dos nossos membros. Cadastre-se na maior plataforma de locais para atividades físicas de Floripa!</p>

      <input
        type="text"
        value={newUsers.nome}
        placeholder="Digite o nome do usuário"
        onChange={(e) =>
          setNewUsers({ ...newUsers, nome: e.target.value })
      }
      /> 

      <input
        type="email"
        value={newUsers.email}
        placeholder="Email do usuário"
        onChange={(e) =>
            setNewUsers({ ...newUsers, email: e.target.value })
        }
      />  <br />

      <input
        type="password"
        value={newUsers.senha}
        placeholder="Senha do usuário"
        onChange={(e) =>
          setNewUsers({ ...newUsers, senha: e.target.value })
        }
      />  

        <input
            type="text"
            value={newUsers.sexo}
            placeholder="Sexo"
            onChange={(e) =>
                setNewUsers({ ...newUsers, sexo: e.target.value })
        }
        />  <br />

        <input
            type='text'
            value={newUsers.cpf}
            placeholder="CPF"
            onChange={(e) =>
                setNewUsers({ ...newUsers, cpf: e.target.value })
        }
        />

        <input
            type="text"
            value={newUsers.data_nascimento}
            placeholder="Data de Nascimento"
            onChange={(e) =>
                setNewUsers({ ...newUsers, data_nascimento: e.target.value })
        }
        />  <br/>

        <input
            type="text"
            value={newUsers.endereco.logradouro}
            placeholder="Logradouro"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, logradouro: e.target.value }
                })
        }
        />

        <input
            type="number"
            value={newUsers.endereco.numero}
            placeholder="Número"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, numero: e.target.value }
                })
        }
        /> <br/>

        <input
            type="text"
            value={newUsers.endereco.bairro}
            placeholder="Bairro"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, bairro: e.target.value }
                })
        }
        />

        <input
            type="text"
            value={newUsers.endereco.cidade}
            placeholder="Cidade"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, cidade: e.target.value }
                })
        }
        /> <br/>

        <input
            type="text"
            value={newUsers.endereco.estado}
            placeholder="Estado"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, estado: e.target.value }
                })
        }
        />

        <input
            type="text"
            value={newUsers.endereco.cep}
            placeholder="CEP"
            onChange={(e) =>
                setNewUsers({
                ...newUsers,
                endereco: { ...newUsers.endereco, cep: e.target.value }
                })
        }
        /> <br/> <br/>

      
      <button onClick={() => registerUsers(newUsers)}>Cadastrar</button>
    </>
)
}

export default UsersRegistration