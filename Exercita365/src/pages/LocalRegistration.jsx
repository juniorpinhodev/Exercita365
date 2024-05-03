import React, { useState } from 'react';

function LocalRegistration() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [esportes, setEsportes] = useState([]);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nome,
      descricao,
      localizacao,
      esportes,
      longitude,
      latitude,
    };

    fetch('http://localhost:3000/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Dados enviados:', result);
        // Limpar os campos após o envio
        setNome('');
        setDescricao('');
        setLocalizacao('');
        setEsportes([]);
        setLongitude('');
        setLatitude('');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <div>
      <h1>Cadastro e Edição de Locais de Exercícios</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Local:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>
        <br />
        <label>
          Descrição:
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </label>
        <br />
        <label>
          Localização:
          <input type="text" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} required />
        </label>
        <br />
        <label>
          Longitude:
          <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
        </label>
        <br />
        <label>
          Latitude:
          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
        </label>
        <br />
        <label>
          Esportes:
          <input type="text" value={esportes} onChange={(e) => setEsportes(e.target.value.split(','))} required />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default LocalRegistration;
