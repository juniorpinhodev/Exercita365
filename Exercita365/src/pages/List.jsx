import React from 'react';
import { useParams } from 'react-router-dom';
import data from '/data/db.json';

function List() {
  const {id} = useParams()
  const userLists = data.list.filter(item => item.userId === id);
  const user = data.users.find(user => user.id === id);
  const userName = user ? user.nome : 'Usuário não encontrado';

  return ( 
    <>
    <h1>Locais de exercícios {id}</h1> 
    <strong>Criado por: {userName}</strong>
    
    <ul>
        {userLists.map(item => (
          <li key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Localização: {item.localizacao}</p>
            <p>Esportes: {item.esportes.join(', ')}</p>
          </li>
        ))}
      </ul>
    
    </>

    
  );
}

export default List;