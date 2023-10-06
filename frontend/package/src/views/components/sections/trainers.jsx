import React, { useState, useEffect } from 'react';
import { Card, CardTitle,  Row, Col, Container } from 'reactstrap';

const Trainers = () => {
    const [trainers, setCampers] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        const obtenerTrainers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/trainers/todos_los_trainers');
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

        obtenerTrainers();
    }, []);

    return (
        <div>
            <div className="spacer" id="card-component"></div>
            <Container>
                <Row className="m-t-40 justify-content-center">
                    {trainers.map((trainer, index) => {
                    const image = images[trainer.imagen];
                    return (
                        <Col key={index} lg="4" md="6">      
                        <Card>
                            <img className="img-fluid" src={image} width="500px" height="450px" alt="Camper" />
                            <h5 className="font-medium m-t-30">{trainer.nombre}</h5>
                            <CardTitle className="m-t-20">{trainer.especialidad}</CardTitle>
                            <CardTitle className="m-t-20">{trainer.tecnologia}</CardTitle>
                            <a href="#" className="linking text-themecolor m-t-10">Eliminar<i className="ti-arrow-right"></i></a>
                        </Card>
                        </Col>
                    );
                    })}
                </Row>
            </Container>

        </div>
    );
}



export default Trainers;
