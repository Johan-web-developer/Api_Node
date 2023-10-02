import React, { useState, useEffect } from 'react';

const TuComponente = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const obtenerCampers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/todos_los_campers'); // Asegúrate de que la URL sea correcta
        const data = await response.json();
        setCampers(data);
      } catch (error) {
        console.error('Error al obtener campers:', error);
      }
    };

    obtenerCampers();
  }, []);

  return (
    <div>
      <h1>Campers</h1>
      <ul>
        {campers.map(camper => (
          <li key={camper._id}>{camper.nombre}</li>
          // Asegúrate de cambiar "nombre" por el campo correcto en tu base de datos
        ))}
      </ul>
    </div>
  );
};

export default TuComponente;
