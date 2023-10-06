import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, Row, Col, Container, Button } from 'reactstrap';
import '../../../assets/text.css';

const Cards = () => {
  const [campers, setCampers] = useState([]);
  const [images, setImages] = useState({});
  const [editedCamperIndex, setEditedCamperIndex] = useState(null);

  useEffect(() => {
    const obtenerCampers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/campers/todos_los_campers');
            const data = await response.json();
            setCampers(data);

            const campersConNuevoNombre = data.map(camper => ({
              ...camper,
              nuevoNombre: '', // Aquí inicializas nuevoNombre
            }));
        
            setCampers(campersConNuevoNombre);

            // Obtener todas las imágenes
            const imagePromises = data.map(async camper => {
                try {
                    const response = await import(`../../../assets/images/campers/${camper.imagen}`);
                    return { [camper.imagen]: response.default };
                } catch (error) {
                    console.error('Error al cargar la imagen:', error);
                    return null;
                }
            });

            const loadedImages = await Promise.all(imagePromises);
            const filteredImages = loadedImages.filter(image => image !== null);
            setImages(Object.assign({}, ...filteredImages));
        } catch (error) {
            console.error('Error al obtener campers:', error);
        }
    };
    obtenerCampers();
}, []);

  const handleEdit = (index) => {
    setEditedCamperIndex(index);
  }
  const handleSaveEdit = async (index) => {
    try {
        const editedCamper = campers[index]; // Obtener el camper editado
        const response = await fetch(`http://localhost:4000/api/campers/actualizar_camper/${editedCamper._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nuevoNombre: editedCamper.nuevoNombre,
            })
        });

        if (response.ok) {
            const data = await response.json();
            const updatedCampers = campers.map((camper, i) => {
                if (i === index) {
                    return { ...camper, nombre: data.nuevoNombre };
                }
                return camper;
            });
            setCampers(updatedCampers);
            setEditedCamperIndex(null);
        } else {
            console.error('Error al actualizar el camper:', response);
        }
    } catch (error) {
        console.error('Error al actualizar el camper:', error);
    }
}
const handleDelete = async (camperId) => {
  try {
      const response = await fetch(`http://localhost:4000/api/campers/eliminar_camper/${camperId}`, {
          method: 'DELETE'
      });
      if (response.ok) {
          const updatedCampers = campers.filter(camper => camper._id !== camperId);
          setCampers(updatedCampers);
      }
  } catch (error) {
      console.error('Error al eliminar el camper:', error);
  }
}
  return (
    <div>
      <div className="spacer" id="card-component"></div>
      <CardTitle className='text-center text-black h1'>Campers</CardTitle>
      <Container>
        <Row className="m-t-40 justify-content-center">
          {campers.map((camper, index) => {
            const image = images[camper.imagen];
            return (
              <Col md="6" key={index}>
                <Card>
                  <img className="card-img" src={image} alt={`Camper`} />
                  <CardTitle className="m-t-20 text-center">{camper.nombre}</CardTitle>
                  <CardText className="m-t-20 text-center">
                    Edad: {camper.edad} <br />
                    Especialidad: {camper.especialidad}
                  </CardText>
                  {editedCamperIndex === index ? (
                    <>
                      <div className="mb-3">
                        <label htmlFor="nuevoNombre" className="form-label">Nuevo Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nuevoNombre"
                          value={campers[index].nuevoNombre || ''}
                          onChange={(e) => setCampers(prevCampers => {
                            const updatedCampers = [...prevCampers];
                            updatedCampers[index].nuevoNombre = e.target.value;
                            return updatedCampers;
                          })}
                        />
                      </div>
                      <Button className='btn btn-success' onClick={() => handleSaveEdit(index)}>
                        Guardar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className='btn btn-warning' onClick={() => handleEdit(index)}>
                        Editar
                      </Button>
                      <Button className='btn btn-danger' onClick={() => handleDelete(camper._id)}>
                        Eliminar
                      </Button>
                    </>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
