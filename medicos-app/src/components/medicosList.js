import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MedicosList() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setMedicos(response.data);
      } catch (error) {
        setError('Erro ao buscar médicos. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicos();
  }, []);

  if (loading) {
    return <div className='loading'>Carregando...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className='medicosList'>
      <h1>Lista de médicos</h1>
      {medicos.length === 0 ? (
        <p>Nenhum médico encontrado.</p>
      ) : (
        <ul>
          {medicos.map(medico => (
            <li key={medico.id} className='medicoItem'>
              <h2>{medico.name}</h2>
              <p>E-mail: {medico.email}</p>
              <p>Telefone: {medico.phone}</p>
              <p>Website: {medico.website}</p>
              <p>Endereço: {medico.address.street}, {medico.address.suite}, {medico.address.city} - {medico.address.zipcode}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MedicosList;
