import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';


const Cards = () => {
    const [campers, setCampers] = useState([]);
  
    useEffect(() => {
      const obtenerCampers = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/campers/todos_los_campers');
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
            <div className="spacer" id="card-component"></div>
            <Container>
                <Row>
                {campers.map((campers, index) => (
                    <Col md="6" key={index}>
                        <Card body className="card-shadow m-b-3">
                            <img src={campers.imagen} alt={`Camper`} className="img-responsive" />
                            <CardTitle>{campers.nombre}</CardTitle>
                            <CardText>
                                Edad: {campers.edad} <br />
                                Especialidad: {campers.especialidad}
                            </CardText>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
