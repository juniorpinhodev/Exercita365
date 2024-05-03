import { UsersContext } from '../context/UsersContext'
import React, { useContext, useState } from 'react';


function UsersRegistration(){

  const { users, registerUsers, removeUsers, editUsers } = useContext(UsersContext)
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

  //Editar
  const [isEditing, setIsEditing] = useState(false);
  const [originalCpf, setOriginalCpf] = useState('');

  const handleEditUser = (user) => {
    setNewUsers({
      id: user.id,
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      sexo: user.sexo,
      cpf: user.cpf,
      data_nascimento: user.data_nascimento,
      endereco: { ...user.endereco }
    });
    setOriginalCpf(user.cpf);
    setIsEditing(true);
    
  };

  const handleSubmit = () => {
    if (isEditing) {
      if (newUsers.cpf !== originalCpf) {
        const cpfExists = users.some(user => user.cpf === newUsers.cpf);
        if (cpfExists) {
          alert('CPF já cadastrado');
          return;
        }
      }
      editUsers(newUsers);
    } else {
      const cpfExists = users.some(user => user.cpf === newUsers.cpf);
      if (cpfExists) {
        alert('CPF já cadastrado');
        return;
      }
      registerUsers(newUsers);
    }
    setNewUsers({
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
    setIsEditing(false);
  };

  //CPF 11 números
  const handleCpfChange = (e) => {
    let value = e.target.value;
 
    value = value.replace(/\D/g, '');
 
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      setNewUsers({ ...newUsers, cpf: value });
    }
  };
  
  const handleSexoChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === 'masculino' || value === 'feminino') {
      setNewUsers({ ...newUsers, sexo: value });
    }
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setNewUsers({ ...newUsers, email: value });
    }
  };

return(
    <>
      <h1>Usuários Cadastrados</h1>
      <p>Abaixo, segue a lista de usuários que estão cadastrados em nossa plataforma.</p>

      {!!users &&
        users.map((user) => (
          <>
            <h3 key={user.id}>{user.nome}</h3>
            <button onClick={() => removeUsers(user.id)}>Deletar</button>
            <button onClick={() => handleEditUser(user)}>Editar</button>
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
                onChange={handleCpfChange}
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

      
      <button onClick={handleSubmit}>{isEditing ? 'Editar' : 'Cadastrar'}</button>
    </>
)
}

export default UsersRegistration