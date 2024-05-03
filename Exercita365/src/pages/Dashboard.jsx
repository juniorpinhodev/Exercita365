import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        // Substitua pelo código de busca dos locais no seu arquivo db.json
        const response = await fetch('data/db.json');
        const data = await response.json();
        setLocais(data.list);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocais();
  }, []);

    return ( 
      <div>
        <h1>Dashboard</h1>
        
        <h2>Locais Cadastrados:</h2>
      <ul>
        {locais.map(local => (
          <li key={local.id}>
            {local.nome} - {local.descricao}
          </li>
        ))}
      </ul>
         
        <Link to="/local-registration">Registrar Novo Local</Link>
      
    </div>      
    );
  }
  
  export default Dashboard;