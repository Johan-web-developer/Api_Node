import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Cards = () => {
    const [campers, setCampers] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        const obtenerCampers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/campers/todos_los_campers');
                const data = await response.json();
                setCampers(data);

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

    return (
        <div>
            <div className="spacer" id="card-component"></div>
            <Container>
                <Row className="m-t-40 justify-content-center">
                    {campers.map((camper, index) => {
                        const image = images[camper.imagen];
                        return (
                            <Col md="6" key={index}>
                                <Card>
                                    <img className="card-img" src={image} alt={`Camper`} width={280} height={250}/>
                                    <CardTitle lassName="m-t-20">{camper.nombre}</CardTitle>
                                    <CardText lassName="m-t-20">
                                        Edad: {camper.edad} <br />
                                        Especialidad: {camper.especialidad}
                                    </CardText>
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
