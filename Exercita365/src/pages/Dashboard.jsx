import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



function Dashboard() {
  const [locais, setLocais] = useState([]);
  const [usuariosAtivos, setUsuariosAtivos] = useState(0);

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const response = await fetch('data/db.json');
        const data = await response.json();
        setLocais(data.list);

        const usuariosAtivos = data.users.filter(user => user.isLogged).length;
        setUsuariosAtivos(usuariosAtivos);

      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocais();
  }, []);

    return ( 
      <div>
 
        <h1>Dashboard</h1>

        <div className="card">
        <h2>Usuários Ativos</h2>
        <p>{usuariosAtivos}</p>

        <h2>Locais Cadastrados</h2>
        <p>{locais.length}</p>
      </div> 
        
        <MapContainer center={[-23.561728, -46.646511]} zoom={6} style={{ height: '300px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locais.map(local => (
            <Marker key={local.id} position={[local.latitude, local.longitude]}>
              <Popup>{local.nome}</Popup>
            </Marker>
          ))}
        </MapContainer>

        <br />

          <h2>Todos os Locais Cadastrados:</h2>
        <>
          {locais.map(local => (
            <li key={local.id}>
            <strong></strong>{local.nome}<br />
  
          </li>
          ) )}
        
      </>
      <h2>Lista detalhada dos Locais Cadastrados:</h2>
      <>
        {locais.map(local => (
          <li key={local.id}>
          <strong>Nome: </strong>{local.nome}<br />
          <strong>Descrição: </strong>{local.descricao}<br />
          <strong>Localização: </strong>{local.localizacao}<br />
          <strong>Esportes: </strong>{local.esportes.join(', ')}
          <p></p>
        </li>
        ) )}
      </>
         
        <Link to="/local-registration">Registrar Novo Local</Link>

        
      
    </div>      
    );
  }
  
  export default Dashboard;