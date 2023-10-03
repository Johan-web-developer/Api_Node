import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
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
      <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Campers</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Trainers</a>
        </li>
      </ul>
    </nav>
      <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th isNumeric>ID</Th>
        <Th>Nombre</Th>
        <Th>Edad</Th>
        <Th>Promedio</Th>
        <Th>Nivel-Campus</Th>
        <Th>Nivel-Ingles</Th>
        <Th>Especialidad</Th>
        <Th>Experto-Tecnologia</Th>
        <Th>Detalle</Th>
        <Th>Dirección</Th>
        <Th>Celular</Th>
        <Th>Actualizar Camper</Th>
        <Th>Eliminar Camper</Th>
      </Tr>
    </Thead>
    <Tbody>
      {campers.map(camper => (
        <Tr key={camper._id}>
          <Td>{camper.id}</Td>
          <Td>{camper.nombre}</Td>
          <Td>{camper.edad}</Td>
          <Td>{camper.promedio}</Td>
          <Td>{camper.nivelCAmpus}</Td>
          <Td>{camper.nivelIngles}</Td>
          <Td>{camper.especialidad}</Td>
          <Td>{camper.expertoTecnologia}</Td>
          <Td>{camper.detalle}</Td>
          <Td>{camper.direccion}</Td>
          <Td>{camper.celular}</Td>
          <Td>
            <Button variant="contained" color="primary">Actualizar</Button>
          </Td>
          <Td>
            <Button variant="contained" color="warning">Eliminar</Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    </div>
  );
};

export default TuComponente;
