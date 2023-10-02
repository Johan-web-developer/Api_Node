import React, { useState, useEffect } from 'react';
import './App.css'

const TuComponente = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const obtenerCampers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/todos_los_campers');
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
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Promedio</th>
            <th>Nivel-Campus</th>
            <th>Nivel-Ingles</th>
            <th>Especialidad</th>
            <th>Experto-Tecnologia</th>
            <th>Detalle</th>
            <th>Dirección</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {campers.map(camper => (
            <tr key={camper._id}>
              <td><img src={`./assets/${camper.imagen}`}></img></td>
              <td>{camper.id}</td>
              <td>{camper.nombre}</td>
              <td>{camper.edad}</td>
              <td>{camper.promedio}</td>
              <td>{camper.nivelCAmpus}</td>
              <td>{camper.nivelIngles}</td>
              <td>{camper.especialidad}</td>
              <td>{camper.expertoTecnologia}</td>
              <td>{camper.detalle}</td>
              <td>{camper.direccion}</td>
              <td>{camper.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TuComponente;
