// ExerciseLocationForm.js

import React, { useState, useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

const ExerciseLocationForm = () => {
  const { registerExerciseLocation } = useContext(UsersContext);
  const [location, setLocation] = useState({
    name: '',
    userId: '',
    description: '',
    location: '',
    longitude: '',
    latitude: '',
    sports: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerExerciseLocation(location);
    setLocation({
      name: '',
      userId: '',
      description: '',
      location: '',
      longitude: '',
      latitude: '',
      sports: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do local"
        value={location.name}
        onChange={(e) => setLocation({ ...location, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Identificador do usuário"
        value={location.userId}
        onChange={(e) => setLocation({ ...location, userId: e.target.value })}
      />
      <textarea
        placeholder="Descrição do local"
        value={location.description}
        onChange={(e) => setLocation({ ...location, description: e.target.value })}
      ></textarea>
      <input
        type="text"
        placeholder="Localização"
        value={location.location}
        onChange={(e) => setLocation({ ...location, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={location.longitude}
        onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={location.latitude}
        onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tipos de práticas esportivas"
        value={location.sports}
        onChange={(e) => setLocation({ ...location, sports: e.target.value })}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ExerciseLocationForm;
