import React, { useState, useEffect } from 'react';

function LocalRegistration() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [esportes, setEsportes] = useState([]);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const response = await fetch('http://localhost:3000/list');
        const data = await response.json();
        setLocais(data);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocais();
  }, []);

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
    
        setNome('');
        setDescricao('');
        setLocalizacao('');
        setEsportes([]);
        setLongitude('');
        setLatitude('');

        setLocais([...locais, result]);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

 
    const handleEdit = (id) => {
        // Encontrar o local a ser editado
        const localEditar = locais.find((local) => local.id === id);
      
        // Preencher os campos do formulário com os dados do local a ser editado
        setNome(localEditar.nome);
        setDescricao(localEditar.descricao);
        setLocalizacao(localEditar.localizacao);
        setEsportes(localEditar.esportes);
        setLongitude(localEditar.longitude);
        setLatitude(localEditar.latitude);
      
        // Remover o local da lista
        setLocais(locais.filter((local) => local.id !== id));
      };
      
      const handleDelete = (id) => {
        fetch(`http://localhost:3000/list/${id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then(() => {
            console.log('Local deletado com sucesso');
            // Atualizar a lista de locais removendo o local deletado
            setLocais(locais.filter((local) => local.id !== id));
          })
          .catch((error) => {
            console.error('Erro ao deletar local:', error);
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

        <h2>Locais de Exercícios Registrados</h2>
        <ul>
            {locais.map((local) => (
            <li key={local.id}>
                {local.nome} - {local.descricao} - {local.localizacao} <br />
                <button onClick={() => handleEdit(local.id)}>Editar</button> &nbsp;
                <button onClick={() => handleDelete(local.id)}>Deletar</button>
                <p></p>
            </li>
            ))}
        </ul>
       
    </div>
  );
}

export default LocalRegistration;
